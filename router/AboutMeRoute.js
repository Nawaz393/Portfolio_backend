const express = require("express");
const GetAboutMe = require("../controller/getAboutMe");
const UpdateAboutMe = require("../controller/updateAboutMe");
const insertAboutMe = require("../controller/insertAboutMe");
const AboutMeRoute = express.Router();

AboutMeRoute.get("/", (req, res) => {
  GetAboutMe()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

AboutMeRoute.post("/", (req, res) => {
  insertAboutMe(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
AboutMeRoute.put("/", (req, res) => {
  UpdateAboutMe(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = AboutMeRoute;