import {app} from "./app.js"
import Razorpay from "razorpay"
 const port  = process.env.PORT
import { connectDB } from "./config/db.js"

connectDB();
 export const instance = new Razorpay({ key_id: process.env.API_KEY, key_secret:process.env.API_SEC })


app.listen(port,()=>console.log(`listening to the port ${port}`))