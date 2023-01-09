const pool = require("../../dataAccessLayer/DatabaseConnection");
const bcrypt = require("bcrypt");
const UpdatepassSchema = require("./UpdatepassSchema");
const updatepass = (data) => {
  return new Promise((resolve, reject) => {
    const { error, value } = UpdatepassSchema.validate(data, {
      AbortEarly: false,
    });
  
    if (error) {
      reject({
        success: false,
        message: error.details[0].message,
      });
    }
    const { userName, password, npassword } = value;
    if (password == npassword) {
      reject({
        success: false,
        message: "password and new password are same",
      });
    }

    const hash = bcrypt.hashSync(npassword, 13);
    const qdata = [hash, userName];
    const query = `UPDATE User SET password=? WHERE userName=?`;
    pool.getConnection((error, conn) => {
      if (error) {
        reject({
          success: false,
          message: "there is some sort of error please try again",
        });
      }
      const fquery = "select * from User where userName=?";
    
      conn.query(fquery, [userName], (err, res) => {
        if (err) {
       
         
          reject({
            success: false,
            message: "there is some sort of error please try again",
          });
        }
       
        if (res.length > 0) {
         
          const dbpass = res[0].password || "";
          const match = bcrypt.compareSync(password, dbpass);

          if (!match) {
              
            reject({
              success: false,
              message: "please enter correct old password",
            });
          }
        } else {
         
          reject({
            success: false,
            message: "incrorrect username",
          });
        }
      });
      conn.query(query, qdata, (err, res) => {
        conn.release();
        if (err) {
          reject({
            success: false,
            message: "there is some sort of error please try again",
          });
        }
  
        if (res.affectedRows <= 0) {
          reject({
            success: false,
            message: "Error: password not updated",
          });
        }
        resolve({
          success: true,
          message: "password updated successfully",
        });
      });
    });
  });
};

module.exports = updatepass;
