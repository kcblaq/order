import React, { useState, FC } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Button, Text, Input, Flex, Spacer, Checkbox, Select, useTheme } from '@chakra-ui/react'
import { AiFillCaretDown } from "react-icons/ai"
import { products } from "../data/Data"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../pages/cartReducer'


export const Products: NextPage = ({ show }) => {
  const [selected, setSelected] = useState([])
  const [total, setTotal] = useState(0)
  const [cartItems, setCartItem] = useState([])

  const dispatch = useDispatch()
  const cartDetail = useSelector((state: any) => state.cart)
  const theme = useTheme()

  const HandleCheckout = () => {

    dispatch(addToCart({ cartItems, total }))
    show()

  }

  const getTotal = (data: any[]) => {
    let result = data.reduce((acc, ar) => {
      console.log(ar)
      return ar.price + acc
    }, 0)
    setTotal(result)
  }

  const pushToArr = (data: { e: any; item: string; price: number; id: number }) => {
    const { e, item, price, id } = data
    const arr = []

    if (e.target.checked) {
      const temp = { item, price, id }
      const result = cartItems.concat(temp).flat(Infinity)
      arr.push(result)
      setCartItem(result)
      getTotal(result)
    } else {
      let newArr = JSON.parse(JSON.stringify(cartItems))
      let itemIndex = ''
      newArr.map((elem: { item: string }, i: any) => {
        if (elem.item === item) {
          itemIndex = newArr.indexOf(elem)
        }
      })
      let toDelete = newArr.splice(itemIndex, 1)
      setCartItem(newArr)
      getTotal(newArr)
    }
  }

  console.log(cartItems)
  console.log(total)
  return (
    <>
      <Box bgColor='#fff' color='#000' minH='100vh' >
        <Box bgColor='#F6F5F5' color='#092443' display='flex' gap='10px' flexDirection='column' maxW='414px' margin='0 auto' py={20} px={8} minH='100vh'>
          <Flex align='center'>
            <Text color='#092443' fontWeight='700'> New Order </Text>
            <Spacer />
            <Button px={8} bgColor='red' color='#fff' onClick={HandleCheckout}> NEXT </Button>
          </Flex>
          <Text color='#CDCCCC' fontWeight='700' align='left'> SELECT PRODUCTS </Text>
          <Flex bgColor='#F6F5F5' color='#092443' display='flex' alignContent='center' mt={4} >
            <Select width='30%' borderColor={theme.colors.primary.main} bg={theme.colors.faint.main} mr={2}>
              {products.map((option, i) => <option key={i} value={option.item}> {option.item}</option>)}
            </Select>
            <Spacer />
            <Input placeholder='Search' bgColor='#fff' size='md' />

          </Flex>
          <Box bgColor='#F6F5F5' color='#092443' display='flex' flexDirection='column' alignContent='center' justifyContent='space-between' mt={14}>
            {products.map(({ item, price }, id) => {
              return (

                <Flex key={item} mt={4}>
                  <Checkbox size='md' mr='1rem' onChange={(e) => pushToArr({ e, item, price, id })} />
                  <p >{item} </p>
                  <Spacer />
                  <p >&#x20A6; {price} </p>
                </Flex>

              )
            })}
          </Box>

        </Box>
      </Box>
    </>
  )
}