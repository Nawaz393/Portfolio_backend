const pool = require("../dataAccessLayer/DatabaseConnection");
const GetAboutMe = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
      }

      const query = "select * from aboutme where id=1";

      con.query(query, (err, res) => {
        con.release();
        if (err) {
          reject({
            success: false,
            message: "there is some Error please try again",
          });
        }

        resolve(res);

      });
    });
  });
};

module.exports = GetAboutMe;
