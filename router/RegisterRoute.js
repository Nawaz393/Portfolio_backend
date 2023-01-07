const handelregister = require("../controller/handelRegister/HandelRegister");
const express = require("express");
const updatepass = require("../controller/handelRegister/updatepass");
const RequireAuth=require("../middleware/RequireAuth")
const router = express.Router();
router.use(RequireAuth)
router.post("/", (req, res) => {
  const { userName, password, email, role } = req.body;

  const data = {
    userName: userName,
    email: email,
    password: password,
    role: role,
  };


 

  handelregister(data)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.put("/", (req, res) => {

 
  updatepass(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));

    
});

module.exports = router;
