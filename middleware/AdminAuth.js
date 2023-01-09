require("dotenv").config();
const jwt = require("jsonwebtoken");
const pool = require("../dataAccessLayer/DatabaseConnection");
const AdminAuth = (req, res, next) => {
  
  const { authorization } = req.headers;
  if (!authorization) {
    
    res.json({
      success: false,
      message: "You are not authorized to access this route",
    });
  }
  const token = authorization.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(401).json({
          success: false,
          message: err.message,
        });
      } else {
        const userName = decodedToken.data.userName;
        const role = decodedToken.data.role;
        
        pool.getConnection((error, conn) => {
          if (error) {
            res.json({
              success: false,
              message: "there is some sort of error please try again",
            });
          }
          if (role.toLowerCase() === "admin") {
            const query = `select * from User where userName=?`;
            conn.query(query, [userName], (err, resp) => {
              conn.release();
              if (err) {
                console.log(err);
                res.json({
                  success: false,
                  message: "there is some sort of error please try again",
                });
              }

              if (resp.length <= 0) {
                res.status(401).json({
                  success: false,
                  message: "you are unauthorized to access this route",
                });
              }
              if (resp.length > 0) {
                next();
              }
            });
          } else {
            res.status(401).json({
              success: false,
              message: "admin authorization required",
            });
          }
        });
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: "You are not authorized to access this route",
    });
  }
};

module.exports = AdminAuth;
