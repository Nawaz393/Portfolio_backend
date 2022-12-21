const pool = require("../../dataAccessLayer/DatabaseConnection");
const DeleteSkill = (data) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
      }
      const query = "delete from Images where id=?";
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
          message: "Skill deleted successfully",
        });
      });
    });
  });
};

module.exports = DeleteSkill;
