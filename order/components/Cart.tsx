import React from 'react'
import { Box, Checkbox, Flex, Spacer, Text, Button, useTheme, TableContainer, Table, Tr, Td, GridItem } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { products } from "../data/Data"
import {useSelector} from 'react-redux'


export default function Cart({show}) {
  const theme = useTheme()
  let Total = 4000

  const cartContent = useSelector((state) => state.cart.cartItems)
  let total = useSelector((state) => state.cart.total)
  console.log(cartContent)
  return (
    <Box bgColor='#fff' color='#000' minH='100vh' >
      <Box bgColor='#F6F5F5' color='#092443' display='flex' gap='10px' flexDirection='column' maxW='414px' margin='0 auto' py={20} px={8} minH='100vh'>
        <AiOutlineArrowLeft cursor='pointer' onClick={show} />
        <Text color='#092443' mt={4} fontWeight={700}> Order Information</Text>
        <Text color='#596273' fontSize='12px'> Here is your order details. Kindly confirm before you proceed to pay</Text>
        <hr />
        <Text> Phone Number</Text>
        <Text color='#596273' fontSize='12px'> 09076857432</Text>
        <Text> Delivery Address</Text>
        <Text color='#596273' fontSize='12px'> No 26, Agbowo opposite Agowo shopping complex</Text>
        <Box bg='#fff' width='100%' minH='20px' mt={6} p={2} borderRadius={10}>
          <Text mt={6}> Product Ordered</Text>
         <Box>
         <TableContainer mt={6}>
            <Table size='sm'>


              {cartContent.map((item: { item: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }, i: any) => (
                <Tr key={item.item} width='100%'>
                  <Td align='left'>{item.item} </Td>
                  <Spacer />
                  <Td align='right'> &#x20A6; {item.price} </Td>
                </Tr>
              )
              )}
              <Tr width='100%'>
                <Td align='left'> Total</Td>
                <Spacer />
                <Td align='right'>&#x20A6; {total}</Td>
              </Tr>

            </Table>
          </TableContainer>
         </Box>

        </Box>
        <Button bg={theme.colors.primary.main} color='#FFF' width='80%' alignSelf='center' > MAKE PAYMENT  </Button>
      </Box>
    </Box>
  )
}
