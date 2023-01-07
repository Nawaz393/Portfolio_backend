const jwt = require("jsonwebtoken");
require("dotenv").config();
GenToken = (data) => {
  const token = jwt.sign(
    { data },
    process.env.SECRET_TOKEN,
  );
  return token;
};

module.exports = GenToken;
