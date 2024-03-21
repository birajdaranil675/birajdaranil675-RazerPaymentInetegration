import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import Card from './Card'
import axios from 'axios'

function Home() {

    const checkoutHandler = async (amount)=>{
        const {data:{order}} = await axios.post('http://localhost:4000/api/checkout',{
            amount
        });

        const key = await axios.get('http://localhost:4000/api/getKey',{});

        var options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Anil Birajdar",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:4000/api/paymentVerification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();

    }

  return (
    <Box>
        <Stack h={"100vh"} justifyContent={"center"} alignItems={'center'} direction={["column", "row"]}>
            <Card amount={50000} img={'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg'} checkoutHandler={checkoutHandler}/>
            <Card amount={25000} img={'https://www.shutterstock.com/image-photo/camera-600nw-610909205.jpg'} checkoutHandler={checkoutHandler}/>
            <Card amount={5000} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUusmMIKXUJemtKUreospeVfp7MjG9bmbjnA&usqp=CAU'} checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  )
}

export default Home