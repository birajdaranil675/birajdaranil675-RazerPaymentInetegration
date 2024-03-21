import {instance} from '../server.js'
import crypto from 'crypto'

export const checkout = async (req, res)=>{
  //console.log('checking out..');
    const body = req.body;
    const options = {
        amount: Number(body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      const order = await instance.orders.create(options);

      console.log(order);

      res.status(200).json({
        sucess: true,
        order
      });
}

export const paymentVerification = async(req, res)=>{
  const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;

 const body = razorpay_order_id + "|" +razorpay_payment_id;

 const expectedSignature = crypto.createHmac('sha256', process.env.RAZERPAY_API_KEY)
                                  .update(body.toString())
                                  .digest('hex');

 console.log("Signature Recived:", razorpay_signature);
 console.log("Signature Expected:", expectedSignature);

 let response = {"signatureIsValid":"false"};
 if(expectedSignature === razorpay_signature){
  response = {"signatureIsValid":"true"};

  //Database operation

  //redirect to payment sucess UI page
  res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`);  
 }else{
  res.status(500).json({
    response
  });
 }
}

