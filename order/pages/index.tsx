import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Products from '../components/Products'
import styles from '../styles/Home.module.css'
import { Box, Button, Text, Input, Flex, Spacer, Checkbox, Select, useTheme } from '@chakra-ui/react'
import { AiFillCaretDown } from "react-icons/ai"
import { products } from "../data/Data"
import Cart from '../components/Cart'
import {Products} from '../components/Products'
import { useSelector } from 'react-redux'



const Home: NextPage = () => {
  const [showCart, setShowCart] = useState(false)
  const all = products.map(item => item.item)
  const prod = products;
  const theme = useTheme()
  

  const ToggleDisplay = () => {
    return setShowCart(!showCart)
  }
console.log(useSelector((state) => state))
console.log(showCart)

 if(showCart){
  return <Cart show={ToggleDisplay}/>
 } else {
  return <Products  show={ToggleDisplay}/>
 }
}

export default Home
