const pool = require("../../dataAccessLayer/DatabaseConnection");

const UpdateQuote = (data) => {
  return new Promise((resolve, reject) => {
    if (data.Quote.length < 10) {
      reject({
        success: false,
        message: "the length of Quote greater the 10",
      });
    }
    pool.getConnection((err, conn) => {
      if (err) {
        reject({
          success: false,
          message: "there is some error please try again",
        });
      }
      const query = "update quote set Quote= ? where id=1";

      conn.query(query, [data.Quote], (err, res) => {
        conn.release();

        if (err) {
          reject({
            success: false,
            message: "there is some error please try again",
          });
        }

        resolve({
          success: true,
          message: "Quote updated successfully",
        });
      });
    });
  });
};
module.exports = UpdateQuote;
