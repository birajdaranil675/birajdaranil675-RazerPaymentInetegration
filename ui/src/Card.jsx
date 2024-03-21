import React from 'react'
import { Button, Image, Text, VStack } from '@chakra-ui/react'

function Card({amount, img, checkoutHandler}) {
  return (
    <VStack>
        <Image src={img}  objectFit={'cover'} boxSize={"64"}/>
        <Text>{amount}</Text>
        <Button onClick={()=>checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  )
}

export default Card