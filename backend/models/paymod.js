import mongoose from "mongoose";


const paySChema= new mongoose.Schema({

    razorpay_payment_id:{
        type:String,
        required:true
    },
    razorpay_order_id:{
        type:String,
        required:true
    },
    razorpay_signature:{
        type:String,
        required:true
    }

})


export const Payment = mongoose.model('Payment',paySChema)