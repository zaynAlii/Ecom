"use client"
import React from 'react'
import Hero from '../../component/Hero'
// import {useContext} from "react"
import { UseProductContext } from '@/context/productcontext'
import Productcontext from '@/context/productcontext'
const About = () => {
  // const {namee}=UseProductContext();
  return (
    <div>
          {/* {namee} */}
          <Hero name={"Z@IN E-Commerce"}/>

    </div>
  )
}

export default About