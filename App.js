const express=require('express');
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("<h1>Hello from Docker by Sameera<h1>");
})
app.listen(port,()=>{
    console.log("Server is listening");
})