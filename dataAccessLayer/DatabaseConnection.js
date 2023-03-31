const mysql = require("mysql2");
require("dotenv").config();

const config = {
  host: process.env.Database_url,
  user: process.env.Database_user,
  password: process.env.Database_password,
  database: process.env.Database_name,
  port: process.env.Database_port,
  connectionLimit: 30,
  sslmode:"REQUIRED"
};

console.log(config);
const pool = mysql.createPool(config);
console.log(pool);
module.exports = pool;
