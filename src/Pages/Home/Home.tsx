import React from 'react'
import Category from '../../Components/Category/Category'
import DailyBest from '../../Components/DailyBest/DailyBest'
import Footer from '../../Components/Shared/Footer/Footer'
import Header from '../../Components/Shared/Header/Header'
import SupplyerBanner from '../../Components/SupplyerBanner/SupplyerBanner'

export const Home = () => {
  return (
    <>
        <Header/>
        <Category/>
        <DailyBest/>
        <SupplyerBanner/>
        <Footer/>
    </>
  )
}
