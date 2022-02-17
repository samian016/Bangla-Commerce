import React from 'react'
import Category from '../../Components/Category/Category'
import Products from '../../Components/Products/Products'
import SliderCat from '../../Components/Shared/Header/SliderCat'
import SupplyerBanner from '../../Components/SupplyerBanner/SupplyerBanner'
import ProductList from '../../Components/ProductList/ProductList'

export const Home = () => {
  return (
    <>
      <SliderCat />
      <Category />
      <Products />
      <SupplyerBanner />
      <ProductList />
    </>
  )
}
