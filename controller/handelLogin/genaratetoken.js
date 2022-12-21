const jwt = require("jsonwebtoken");

GenToken = (data) => {
  const token = jwt.sign(
    { user: data.userName, role: data.role },
    "hellothismnk"
  );
  return token;
};

module.exports = GenToken;
