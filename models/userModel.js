import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    name:{type:String,unique:true,required:true, trim:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:true},
    password:{type:String,required:true}
})


const UserModel =mongoose.model('user',userSchema)


export default UserModel;