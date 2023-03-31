const pool = require("../../dataAccessLayer/DatabaseConnection");

const getmyimage = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        console.log(err);
        reject({
          success: false,
          message: "there is some error please try again",
        });
      }
      const query = "select * from myimage where id=1";
      conn.query(query, (err, res) => {
        conn.release();
        if (err) {
          reject({
            success: false,
            message: "there is some error please try again",
          });
        }

        if (res.length <= 0) {
          reject({
            success: false,
            message: "there no image please upload an image",
          });
        }
        resolve(res);
      });
    });
  });
};

module.exports = getmyimage;
