const mongoose=require("mongoose");
mongoose.model("UserModel",{
name:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
}
});