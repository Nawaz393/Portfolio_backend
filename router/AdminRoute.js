const express = require("express");
const admindata = require("../controller/handelAdminDashboard/GetAdminData");
const RequireAuth=require("../middleware/RequireAuth")
const AdminRoute = express.Router();
AdminRoute.use(RequireAuth)
AdminRoute.get("/", (req, res) => {
  admindata()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = AdminRoute;
