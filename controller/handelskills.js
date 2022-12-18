const pool = require("../dataAccessLayer/DatabaseConnection");
const skillschema = require("./skillschema");

const handelskills = (data) => {
  return new Promise((resolve, reject) => {
    const { error, value } = skillschema.validate(data, { abortEarly: false });
    if (error) {
      reject({
        success: false,
        message: error.details[0].message,
      });
    }
    pool.getConnection((err, conn) => {
      // const qdata = [
      //    value.name,
      //     value.image1,
      //     value.image2,
      //       value.image3,
      // ];
      const qdata=Object.values(value);
    
      const query1 = ` 
    insert into Images (name,image1,image2,image3) values (?,?,?,?)`;

      conn.query(query1, qdata, (err) => {
        conn.release()
        if (err) {
          if (err.message.toLowerCase().includes("duplicate")) {
            reject({
              success: false,
              message: "skill already exist",
            });
          }
          reject({
            success: false,
            message: "there is some ERROR please try again",
          });
        }
        resolve({
          success: true,
          message: "skill added successfully",
        });
      });

      
       
      
    });
  });
};

module.exports = handelskills;
