import mongoose from "mongoose";


export const connectDB =async (req,res)=>{

const {connection} = await mongoose.connect(process.env.MONGO_DB)
console.log(`mongo connected ${connection.host}`)


}