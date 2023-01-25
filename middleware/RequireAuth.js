require("dotenv").config();
const jwt = require("jsonwebtoken");
const pool = require("../dataAccessLayer/DatabaseConnection");
const RequireAuth = (req, res, next) => {
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
        res.json({
          success: false,
          message: err.message,
        });
      } else {
        var dateNow = new Date();

        if (decodedToken.exp < dateNow.getTime() / 1000) {
          res.status(401).json({
            success: false,
            message: "please login again",
          });
          return;
        }

        const userName = decodedToken.data.userName;

        pool.getConnection((error, conn) => {
          if (error) {
            console.log(error);
            res.json({
              success: false,
              message: "there is some sort of error please try again",
            });
          }
          const query = `select * from User where userName=?`;
          conn.query(query, [userName], (err, resp) => {
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
          });
        });

        next();
      }
    });
  } else {
    res.json({
      success: false,
      message: "You are not authorized to access this route",
    });
  }
};

module.exports = RequireAuth;
