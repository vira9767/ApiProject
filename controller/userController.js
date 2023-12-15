import { createUserServices, loginUserServices ,updateUserService} from "../services/userServices.js";
import { bcryptFun,comparePassword} from "../helper/userhelper.js";
import jwt from 'jsonwebtoken'


const createUser =async(req,res)=>{
    let {name,email,mobile,password} = req.body;
    console.log(req.body);
    try {
       let pass = await bcryptFun(password)
       let status= await createUserServices(name,email,mobile,pass)
       if(status=='success'){
        res.status(200).send('success')
       }else{
        res.status(401).send('error');
       }
    } catch (error) {
        console.log(error) 
        res.send('error')
    }
}

const loginUser =async(req,res)=>{
    let {name,password} = req.body;
    try {
      let userObj = await loginUserServices(name)
      let status= await comparePassword(password,userObj.password)
      let token =jwt.sign({name:name},'secreatekey')
    //   console.log(token);
        if(status){
         res.status(200).send(token);
        // res.status(200).send('login success');
        } else{
          res.status(401).send('login error');
           }
    } catch (error) {
        console.log(error)
        res.send('error')
    }
}
const updateUser=async(req,res)=>{
    let {name,email,mobile} =req.body;
    // console.log(req.headers.authorization);
    let tokenbearar =req.headers.authorization;
    let token= tokenbearar.split(' ')[1]
    // console.log(token);
    let payload =jwt.verify(token,'secreatekey')
    console.log(payload);
    try {
        if(name==payload.name){
            await updateUserService(name,email,mobile)
         res.status(200).send('update successfully')  
        }else{
            return 'error'
        }
    } catch (error) {
        console.log((error));
        res.status(401).send('updated error')  
    }
}

export {createUser,loginUser,updateUser}