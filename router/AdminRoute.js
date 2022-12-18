const express = require("express");
const admindata = require("../controller/GetAdminData");
const AdminRoute = express.Router();

AdminRoute.get("/", (req, res) => {
  admindata()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports=AdminRoute;
