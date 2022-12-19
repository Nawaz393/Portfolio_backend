const express = require("express");
const handelskills = require("../controller/handelskills");
const getskills = require("../controller/Getskills");
const UpdateSkill = require("../controller/updateSkill");
const DeleteSkill = require("../controller/DeleteSkill");
const skillroute = express.Router();

skillroute.post("/", (req, res) => {
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

skillroute.put("/", (req, res) => {

  UpdateSkill(req.body)
    .then((data) => res.json(data))
    .catch((data) => res.json(data));
});

skillroute.delete("/", (req, res) => {
  console.log(req.body);
  DeleteSkill(req.body)
    .then((data) => res.json(data))
    .catch((data) => res.json(data));
});
module.exports = skillroute;
