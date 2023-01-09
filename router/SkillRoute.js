const express = require("express");
const handelskills = require("../controller/handelSkill/handelskills");
const getskills = require("../controller/handelSkill/Getskills");
const UpdateSkill = require("../controller/handelSkill/updateSkill");
const DeleteSkill = require("../controller/handelSkill/DeleteSkill");
const RequireAuth = require("../middleware/RequireAuth");
const skillroute = express.Router();

skillroute.post("/" ,RequireAuth ,(req, res) => {
  handelskills(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

skillroute.get("/", (req, res) => {
  getskills()
    .then((data) => res.json(data))
    .catch((data) => res.json(data));
});

skillroute.put("/",RequireAuth , (req, res) => {
  UpdateSkill(req.body)
    .then((data) => res.json(data))
    .catch((data) => res.json(data));
});

skillroute.delete("/",RequireAuth ,(req, res) => {

  DeleteSkill(req.body)
    .then((data) => res.json(data))
    .catch((data) => res.json(data));
});
module.exports = skillroute;
