import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function PaymentSuccess() {
    const searchQuery = useSearchParams()[0];
    const referenceNum = searchQuery.get('reference');
    console.log(referenceNum);
  return (
    <Box>
        <VStack h={'100vh'} justifyContent={'center'}>
            <Heading textTransform={'uppercase'}>Order Sucessfull</Heading>
            <Text>Refernce No: {referenceNum}</Text>
        </VStack>
    </Box>
  )
}

export default PaymentSuccess