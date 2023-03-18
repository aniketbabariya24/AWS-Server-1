const express= require("express")

const app= express();

app.get("/", (req,res)=>{
   res.send("Welcome to AWS Server");
})

app.listen(8080, ()=>{
 console.log("Run is 8080");
})