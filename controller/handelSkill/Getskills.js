const pool = require("../../dataAccessLayer/DatabaseConnection");

const getskills = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject({
          success: false,
          message: "there is some error please try again later",
        });
      }
      const query = `select * from Images`;

      conn.query(query, (err, res) => {
        conn.release();

        if (err) {
          reject({
            success: false,
            message: "there is some error please try again later",
          });
        }

        resolve(res);
      });
    });
  });
};

module.exports = getskills;
