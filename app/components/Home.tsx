import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import PopularBurger from './PopularBurger/PopularBurger'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservition from './Reservition/Reservition'
import Offer from './Offer/Offer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservition />
      <Offer />
    </div>
  )
}

export default Home