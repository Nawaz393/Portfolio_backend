const pool = require("../../dataAccessLayer/DatabaseConnection");

const getquote = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "There is some error please try again",
        });
      }
      const query = "select * from quote where id=1";
      con.query(query, (err, res) => {
        con.release();
        if (err) {
          reject({
            success: false,
            message: "There is some error please try again",
          });
        }

        resolve(res);
      });
    });
  });
};
module.exports = getquote;
