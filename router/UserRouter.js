const express = require("express");
const deleteUser = require("../controller/Handeluser/deleteUser");
const getuser = require("../controller/Handeluser/GetUsers");
const AdminAuth = require("../middleware/AdminAuth");
const RequireAuth=require("../middleware/RequireAuth")
const userroute = express.Router();
userroute.use(AdminAuth);
userroute.get("/", (req, res) => {
  getuser()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
userroute.delete("/", (req, res) => {
  deleteUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
module.exports = userroute;
