const express = require("express");
const getmyimage = require("../controller/GetMyImage");
const handelMyimage=require("../controller/handelMyimage")
const UpdateMyimage=require("../controller/UpdateMyImage")
const myimgRoute = express.Router();


myimgRoute.get("/", (req, res) => {
  getmyimage()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});


myimgRoute.post("/",(req,res)=>{
handelMyimage(req.body).then((result)=>{
    res.json(result)
}).catch((err)=>{

    res.json(err)
})


})
myimgRoute.put("/",(req,res)=>{
    UpdateMyimage(req.body).then((result)=>{
        res.json(result)
    }).catch((err)=>{
    
        res.json(err)
    })
    
    
    })
module.exports = myimgRoute;
