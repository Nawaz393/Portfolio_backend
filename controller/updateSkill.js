const pool = require("../dataAccessLayer/DatabaseConnection");

const UpdateSkill = (data) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
      }

      const query =
        "update Images set name=? ,image1=? ,image2=?, image3=? where id=?";
      con.query(
        query,
        [data.name, data.image1, data.image2, data.image3, data.id],
        (err, res) => {
          con.release();
          if (err) {
            reject({
              success: false,
              message: "there is some Error please try again",
            });
          }

          resolve({
            success: true,
            message: "Skill updated successfully",
          });
        }
      );
    });
  });
};

module.exports = UpdateSkill;
