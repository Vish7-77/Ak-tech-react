import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymod.js";

// instance.orders.create({
//     amount: 50000,
//     currency: "INR",
//     receipt: "receipt#1",
//     notes: {
//       key1: "value3",
//       key2: "value2"
//     }
//   })

export const checkoout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount) * 100,
    currency: "INR",
  };

  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
};

export const verify = async (req, res) => {
  console.log(req.body);

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.API_SEC)
    .update(body.toString())
    .digest("hex");
  console.log("sign received", razorpay_signature);
  console.log("sign generated", expectedSignature);

  const isAuth = expectedSignature === razorpay_signature;

  if (isAuth) {
    //saving to the data base
    await Payment.create({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
