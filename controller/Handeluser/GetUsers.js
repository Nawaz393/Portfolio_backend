const pool = require("../../dataAccessLayer/DatabaseConnection");

const getuser = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
      }

      const query = "select id,userName,email,role from User";

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

module.exports = getuser;
