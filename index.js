//using express
import express from 'express';
const app=express();
app.get('/users',(req,res)=>{
    res.send("hello this is from backend");
})
app.get('/',(req,res)=>{
    res.send("default page");
})
app.listen(7004,()=>
console.log(`server is running at http ${7004}`));