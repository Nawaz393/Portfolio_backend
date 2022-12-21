const pool = require("../../dataAccessLayer/DatabaseConnection");

const deleteProject = (data) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
      }
      const query = "delete from projects where id=?";
      con.query(query, [data.id], (err, res) => {
        con.release();
        if (err) {
          reject({
            success: false,
            message: "there is some Error please try again",
          });
        }
        resolve({
          success: true,
          message: "project deleted successfully",
        });
      });
    });
  });
};


module.exports = deleteProject;
