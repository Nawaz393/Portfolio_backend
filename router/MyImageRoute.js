const express = require("express");
const getmyimage = require("../controller/handelImage/GetMyImage");
const handelMyimage = require("../controller/handelImage/handelMyimage");
const UpdateMyimage = require("../controller/handelImage/UpdateMyImage");
const RequireAuth = require("../middleware/RequireAuth");
const myimgRoute = express.Router();
myimgRoute.use(RequireAuth);
myimgRoute.get("/", (req, res) => {
  getmyimage()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

myimgRoute.post("/", (req, res) => {
  handelMyimage(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
myimgRoute.put("/", (req, res) => {
  UpdateMyimage(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = myimgRoute;
