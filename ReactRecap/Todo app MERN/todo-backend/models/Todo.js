const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
},{timestamps:true});

module.exports=mongoose.model('Todo',todoSchema);