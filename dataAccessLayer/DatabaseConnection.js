const mysql = require("mysql");
require("dotenv").config();
const pool = mysql.createPool({
  host: process.env.Database_url,
  user: process.env.Database_user,
  password: process.env.Database_password,
  database: process.env.Database_name,
  port: process.env.Database_port,
  connectionLimit: 10,
});
module.exports = pool;
