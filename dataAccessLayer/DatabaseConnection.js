const mysql=require("mysql");
const pool =mysql.createPool({
host:"localhost",
user:"root",
password:"root",
database:"Portfolio",
connectionLimit:10,

})

module.exports= pool;
