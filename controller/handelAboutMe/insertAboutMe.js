const pool = require("../../dataAccessLayer/DatabaseConnection");

const insertAboutMe = (data) => {
  return new Promise((resolve, reject) => {
    if (data.length < 50) {
      reject({
        success: false,
        message: "the about me must be greater then 50 character",
      });
    }

    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
      }

      const query = "insert into aboutme (text) values (?)";

      con.query(query, [data.text], (err, res) => {
        con.release();
        if (err) {
          console.log(err);
          reject({
            success: false,
            message: "there is some Error please try again",
          });
        }

        resolve({
          success: true,
          message: "about me inserted successfully",
        });
      });
    });
  });
};

module.exports = insertAboutMe;
