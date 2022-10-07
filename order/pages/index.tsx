import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Products from '../components/Products'
import styles from '../styles/Home.module.css'
import { Box, Button, Text, Input, Flex, Spacer, Checkbox, Select, useTheme } from '@chakra-ui/react'
import { AiFillCaretDown } from "react-icons/ai"
import { products } from "../data/Data"
import Cart from '../components/Cart'


const Home: NextPage = () => {
  const all = products.map(item => item.item)
  const prod = products;
  const theme = useTheme()
  return (
    // <Products />
    <Cart />

  )
}

export default Home
