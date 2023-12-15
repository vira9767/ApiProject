import UserModel from "../models/userModel.js";
//import hashPassword from "../helper/userhelper.js";




const createUserServices =async(name,email,mobile,password)=>{
 try {
    let user = new UserModel({name,email,mobile,password})
    await user.save();
    //res.status(200).send('success')
    return "success"
 } catch (error) {
    console.log(error)
    return 'error'
 }
}

const loginUserServices =async(name,password)=>{
   try {
      let user = await UserModel.findOne({name});
       return user
   } catch (error) {
      console.log(error)
       return 'login error'

   }
}
const updateUserService=async(name,email,mobile)=>{
   try {
      let update = await UserModel.updateOne({name,email},{mobile})
      // console.log(update);
      return 'success'
      // return update;
   } catch (error) {
      console.log(error);
      return 'update error'
   }

}

export {createUserServices,loginUserServices,updateUserService}
