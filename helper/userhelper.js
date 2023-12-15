import bcrypt from 'bcrypt'
let salt = 10;

const bcryptFun = async (pass)=>{
    try {
        let hashPassword = await bcrypt.hash(pass,10)
             console.log(hashPassword)
             return hashPassword;
       } catch (error) {
         console.log(error); 
       }
}

const comparePassword =async(password,bcryptFun)=>{
   try {
   let comparePass = await bcrypt.compare(password,bcryptFun)
    console.log(comparePass)
    return comparePass;
   } catch (error) {
     console.log(error); 
   }
}

// bcrypt.compare(pass,hashPassword,(error,result)=>{
//     console.log(result)
// })


export { bcryptFun,comparePassword}