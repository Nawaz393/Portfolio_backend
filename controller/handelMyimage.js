const pool = require("../dataAccessLayer/DatabaseConnection");
const handelMyimage = (data) => {
  return new Promise((resolve, reject) => {
    if (data.image.length < 10) {
      reject({
        success: false,
        message: "the Url must be greater then 10 character",
      });
    }

    pool.getConnection((err, con) => {
      if (err) {
        reject({
          success: false,
          message: "there is Some error please try again",
        });
    }
        const query = "insert into myimage(image) values (?)";

        con.query(query, [data.image], (err, res) => {
            con.release();
          if (err) {
            reject({
              success: false,
              message: "there is some Error please try again",
            });
          }

          resolve({
            success: true,
            message: "image uploaded successfully",
          });
        });
      
    });
  });
};

module.exports=handelMyimage;
