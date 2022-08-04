const express=require("express");
const cors=require("cors");
const mongooose=require('mongoose');
mongooose.connect("mongodb://localhost:27017/e-commerce");
const User=require('./User')
const app=express();


app.use(express.json());
app.use(cors());
app.post("/register",async (req,resp)=>
{
    // const password = await bcrypt.hash(plainTextPassword,salt);
    let user =new User(req.body);
    let result=await user.save();
    resp.send(result);
})

app.listen(5000); 