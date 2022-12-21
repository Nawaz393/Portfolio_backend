const pool = require("../../dataAccessLayer/DatabaseConnection");

const updateAboutMe = (data) => {
  return new Promise((resolve, reject) => {
    if (data.text.length < 50) {
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

      const query = "update aboutme set text=? where id=1";

      con.query(query, [data.text], (err, res) => {
        con.release();
        if (err) {
          reject({
            success: false,
            message: "there is some Error please try again",
          });
        }

        resolve({
          success: true,
          message: "about me updated successfully",
        });
      });
    });
  });
};

module.exports = updateAboutMe;
