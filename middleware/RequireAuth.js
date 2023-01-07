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

  console.log(token);

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
      if (err) {
        res.json({
          success: false,
          message: err.message,
        });
      } else {
        const userName = decodedToken.data.userName;

        pool.getConnection((error, conn) => {
          if (error) {
            res.json({
              success: false,
              message: "there is some sort of error please try again",
            });
          }

          const query = `select * from User where userName=?`;
          conn.query(query, [userName], (err, res) => {
            if (err) {
              res.json({
                success: false,
                message: "there is some sort of error please try again",
              });
            }

            if (res.length <= 0) {
              res.json({
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
