const express = require("express");
const GetProjects = require("../controller/handelProjects/getProjects");
const insertProject = require("../controller/handelProjects/insertProjects");
const updateProject = require("../controller/handelProjects/updateProjects");
const deleteProject = require("../controller/handelProjects/deleteProject");
const RequireAuth = require("../middleware/RequireAuth");
const AdminAuth = require("../middleware/AdminAuth");
const projectRoutes = express.Router();

projectRoutes.get("/", (req, res) => {
  GetProjects()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

projectRoutes.post("/", RequireAuth, (req, res) => {
  insertProject(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

projectRoutes.put("/", AdminAuth, (req, res) => {
  updateProject(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
projectRoutes.delete("/", AdminAuth, (req, res) => {
  deleteProject(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = projectRoutes;
