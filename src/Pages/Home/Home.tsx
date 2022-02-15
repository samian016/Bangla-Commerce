import React from 'react'
import Category from '../../Components/Category/Category'
import DailyBest from '../../Components/DailyBest/DailyBest'
import Products from '../../Components/Products/Products'
import Footer from '../../Components/Shared/Footer/Footer'
import SupplyerBanner from '../../Components/SupplyerBanner/SupplyerBanner'

export const Home = () => {
  return (
    <>
      <Category />
      <Products />
      <DailyBest />
      <SupplyerBanner />
      <Footer />
    </>
  )
}
