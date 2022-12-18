const pool = require("./dataAccessLayer/DatabaseConnection");
const loginRouter = require("./router/loginRoute");
const registerroute=require("./router/RegisterRoute");
const skillRoute=require("./router/SkillRoute");
const express = require("express");
const upload=require("express-fileupload");
const myimgRoute=require("./router/MyImageRoute");
const QuoteRoute=require("./router/QuoteRoute")
const AdminRoute=require("./router/AdminRoute")
const app = express();
app.use(upload());

app.use(express.json());



app.use("/login", loginRouter);
app.use("/register",registerroute);
app.use("/skills",skillRoute);
app.use("/myimage",myimgRoute);
app.use("/Quote",QuoteRoute);
app.use("/admin",AdminRoute);






app.listen(5000, () => {
  console.log("listening on port 5000");

});
