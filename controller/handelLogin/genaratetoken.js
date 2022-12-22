const jwt = require("jsonwebtoken");

GenToken = (data) => {
  const token = jwt.sign(
    { data },
    "hellothismnk"
  );
  return token;
};

module.exports = GenToken;
