const express = require("express");
const handellogin = require("../controller/HandelLogin");

const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  // const { userName, password } = req.body;

  handellogin(req.body).then((data) => res.json(data)).catch((err)=>{res.json(err)});
});

module.exports = loginRouter;
