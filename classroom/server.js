const express = require("express");
const app = express();

 app.get("/",(req,res)=>{
    res.send("hi root");

 });
 app.listen(3000,() => {
    console.log("server is listing to 3000");
 });