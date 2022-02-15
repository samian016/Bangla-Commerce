import React from 'react'
import Category from '../../Components/Category/Category'
import DailyBest from '../../Components/DailyBest/DailyBest'
import Products from '../../Components/Products/Products'
import Footer from '../../Components/Shared/Footer/Footer'
import SliderCat from '../../Components/Shared/Header/SliderCat'
import SupplyerBanner from '../../Components/SupplyerBanner/SupplyerBanner'

export const Home = () => {
  return (
    <>
      <SliderCat />
      <Category />
      <Products />
      <DailyBest />
      <SupplyerBanner />
    </>
  )
}
