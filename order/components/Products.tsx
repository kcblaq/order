import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Text, Input, Flex, Spacer, Checkbox, Select, useTheme } from '@chakra-ui/react'
import { AiFillCaretDown } from "react-icons/ai"
import { products } from "../data/Data"


export const Products: NextPage = () => {
  const all = products.map(item => item.item)
  const prod = products;
  // console.log(prod)
  const theme = useTheme()
  return (

    <>
      <Box bgColor='#fff' color='#000' minH='100vh' >
        <Box bgColor='#F6F5F5' color='#092443' display='flex' gap='10px' flexDirection='column'  maxW='414px' margin='0 auto' py={20} px={8} minH='100vh'>
          <Flex align='center'>
            <Text color='#092443' fontWeight='700'> New Order </Text>
            <Spacer />
            <Button px={8} bgColor='red' color='#fff'> NEXT </Button>
          </Flex>
            <Text color='#CDCCCC' fontWeight='700' align='left'> SELECT PRODUCTS </Text>
          <Flex bgColor='#F6F5F5' color='#092443' display='flex' alignContent='center' mt={4} >
            <Select width='30%' borderColor={theme.colors.primary.main} bg={theme.colors.faint.main} mr={2}>
              {prod.map((option, i) => <option key={i} value={option.item}> {option.item}</option>)}
            </Select>
            <Spacer/>
            <Input placeholder='Search' bgColor='#fff' size='md' />

          </Flex>
          <Box bgColor='#F6F5F5' color='#092443' display='flex' flexDirection='column' alignContent='center' justifyContent='space-between' mt={14}>
            {products.map((item, i) => {
              return (
                <>
                  <Flex mt={4}>
                    <Checkbox size='md' mr='1rem' />
                    <p key={i}>{item.item} </p>
                    <Spacer />
                    <p>&#x20A6; {item.price} </p>
                  </Flex>
                </>
              )
            })}
          </Box>

        </Box>
      </Box>
    </>

  )
}

export default Products
