const pool = require("../../dataAccessLayer/DatabaseConnection");

const admindata = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is some error please try again",
        });
      }

      const query =
        "select count(*) as Count from User union select count(*)  from Images";
      con.query(query, (err, res) => {
        con.release();

        if (err) {
          reject({
            success: false,
            message: "there is some error please try again",
          });
        }

        resolve(res);
      });
    });
  });
};
module.exports = admindata;
