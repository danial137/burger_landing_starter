import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import PopularBurger from './PopularBurger/PopularBurger'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservition from './Reservition/Reservition'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservition/>
    </div>
  )
}

export default Home