const pool = require("../../dataAccessLayer/DatabaseConnection");

const deleteUser = (data) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
      }

      const query = "delete from User where id=?";

      con.query(query, [data.id], (err, res) => {
        con.release();
        if (err) {
          reject({
            success: false,
            message: "there is some Error please try again",
          });
        }
        if (res.affectedRows == 0) {
          reject({
            success: false,
            message: "User not found",
          });
        }
        resolve({
          success: true,
          message: "User deleted",
        });
      });
    });
  });
};

module.exports = deleteUser;
