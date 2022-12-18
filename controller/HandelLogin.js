const schema = require("./LoginSchema");
const pool = require("../dataAccessLayer/DatabaseConnection");
const bcrypt=require("bcrypt");
const GenToken=require("./genaratetoken")

const handellogin = (data) => {
  return new Promise((resolve, reject) => {
    const { error, value } = schema.validate(data, { abortEarly: false });
    if (error) {
      reject({
        success: false,
        message: error.details[0].message,
      });
    }
    const query = `select * from User where userName='${value.userName}'`;
  



    pool.getConnection((error,conn)=>{

      if(error){
     reject({
success:false,
message:"there is some sort of error please try again"

     })


      }
    conn.query(query, (err, res) => {

conn.release();
       
      if (err) {
        reject({
          success: false,
          message: "there is some error please try again",
        });
      } else if (res.length <= 0) {
        reject({
          success: false,
          message: " user name or password is incorrect",
        });
      }


      if(res.length > 0){
        if(res[0].userName===value.userName){

        const flag=bcrypt.compareSync(value.password,res[0].password);
        
      if(flag){
                const tdata={name:res[0].name,role:res[0].role};

            const token=GenToken(tdata)
        resolve({
            success:true,
            token:token
        })
      }
      else{

        reject({

            success:false,
            message:"user name or password is incorrect"
        })
      }
    }
    else{

      reject({
  
        success:false,
        message:"user name or password is incorrect"
    })
    }
  }
  



    });
  });
  });
};

module.exports=handellogin;
