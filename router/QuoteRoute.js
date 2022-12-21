const express = require("express");
const UpdateQuote = require("../controller/handelQuote/UpdateQuote");
const getquote = require("../controller/handelQuote/getQuote");
const QuoteRoute = express.Router();

QuoteRoute.put("/", (req, res) => {
  console.log(req.body);
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
