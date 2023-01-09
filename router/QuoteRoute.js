const express = require("express");
const UpdateQuote = require("../controller/handelQuote/UpdateQuote");
const getquote = require("../controller/handelQuote/getQuote");
const RequireAuth=require("../middleware/RequireAuth");

const QuoteRoute = express.Router();
QuoteRoute.put("/",RequireAuth ,(req, res) => {
  
  UpdateQuote(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

QuoteRoute.get("/", (req, res) => {
  getquote()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = QuoteRoute;
