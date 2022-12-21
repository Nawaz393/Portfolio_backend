const schema = require("./RegisterSchema");
const bcrypt = require("bcrypt");
const pool = require("../../dataAccessLayer/DatabaseConnection");

const handelregister = async (data) => {
  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(data, { abortEarly: false });

    if (error) {
      reject({
        success: false,
        message: error.details[0].message,
      });
    }

    const { password } = value;

    const hash = bcrypt.hashSync(password, 13);

    const hashvalue = { ...value, password: hash };

    const query =
      "insert into User (userName,email,password,role) value(?,?,?,?)";

    const qdata = Object.values(hashvalue);

    pool.getConnection((error, conn) => {
      if (error) {
        reject({
          success: false,
          message: "there is some sort of error please try again",
        });
      }
      conn.query(query, qdata, (err, res) => {
        conn.release();
        if (err) {
          if (err.message.toLocaleLowerCase().includes("duplicate")) {
            reject({
              success: false,
              message: "email or username already exist ",
            });
          }

          reject({
            success: false,
            message: err.message,
          });
        }

        resolve({
          success: true,
          message: "account register successfully",
        });
      });
    });
  });
};

module.exports = handelregister;
