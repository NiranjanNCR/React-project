import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/image/study1.webp"
import Common from "./Common"
const Home = ()=> {
  return (
    <>
     <Common name='Grow your bussiness'imgsrc ={web} visit ="/service" btname="Get Started"/>
  </>
  )}

export default Home;
