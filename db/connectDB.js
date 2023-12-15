import mongoose from "mongoose";


let connectDB = async(url,dbname)=>{
    try {
   await mongoose.connect(url+dbname)
   console.log('connected db sucessfully')
    } catch (error) {
        console.log(`error during connecting db`)  
    }
}

export default connectDB;