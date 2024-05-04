import React from 'react'
import Hero from './hero/Hero'
import Story from './story/Story'
import LoveLife from './love-life'
import Guide from './guide/Guide'
import Plan from './plan'
import Tutorials from './tutorials/Tutorials'
import About from './about/About'
import Texts from './texts/Texts'
import Changes from './change/Changes'

const Home = () => {
  return (
    <>
    <Hero/>
    <Story/>
    <LoveLife/>
    <Guide/>
    <Plan/>
    <Tutorials/>
    <Changes/>
    <Texts/>

    <About/>
    </>
  )
}

export default Home