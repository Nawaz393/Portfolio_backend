const jwt = require("jsonwebtoken");
require("dotenv").config();
GenToken = (data) => {
  const token = jwt.sign({ data }, process.env.SECRET_TOKEN, {
    expiresIn: "1d",
  });
  return token;
};

module.exports = GenToken;
