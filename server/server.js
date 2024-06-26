import {app} from './app.js'
import Razorpay from 'razorpay'

export const instance = new Razorpay({
    key_id: process.env.RAZERPAY_API_KEY,
    key_secret: process.env.RAZERPAY_API_SECRET,
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on ${process.env.PORT}`);
})