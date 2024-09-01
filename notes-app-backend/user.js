const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/login-app");

const userSchema=mongoose.Schema({
    email:{type:String,unique:true},
    name:String,
    password:String,
    notes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        }
    ]
});

module.exports=mongoose.model("user",userSchema);