const express = require("express");
const GetAboutMe = require("../controller/handelAboutMe/getAboutMe");
const UpdateAboutMe = require("../controller/handelAboutMe/updateAboutMe");
const insertAboutMe = require("../controller/handelAboutMe/insertAboutMe");
const RequireAuth = require("../middleware/RequireAuth");
const AboutMeRoute = express.Router();



AboutMeRoute.get("/", (req, res) => {
  GetAboutMe()
    .then((data) =>  res.json(data))
    .catch((err) => res.json(err));
});

AboutMeRoute.post("/",RequireAuth, (req, res) => {
  insertAboutMe(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
AboutMeRoute.put("/", RequireAuth,(req, res) => {
  UpdateAboutMe(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = AboutMeRoute;
