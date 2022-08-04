const mongooose=require('mongoose');

const userschema=new mongooose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports=mongooose.model("users",userschema);