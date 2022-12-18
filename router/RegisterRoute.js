const handelregister = require("../controller/HandelRegister");
const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  

  const { userName, password, email, role } = req.body;

  const data = {
    userName: userName,
    email: email,
    password: password,
    role: role,
  };

  console.log(data);

  handelregister(data)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
