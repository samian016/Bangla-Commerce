import React from "react";
import Category from "../../Components/Category/Category";
import Products from "../../Components/Products/Products";
import SliderCat from "../../Components/Shared/Header/SliderCat";
import SupplyerBanner from "../../Components/SupplyerBanner/SupplyerBanner";
import ProductList from "../../Components/ProductList/ProductList";
import Newsletter from "../Newsletter/Newsletter";
import CategoryBanner from "./../Category/Category";
import DailyBest from "../../Components/DailyBest/DailyBest";
// import Sponsor from "../../Components/Sponsor/Sponsor";
import { MessengerCustomerChat } from "typescript-react-facebook-messenger";


export const Home = () => {



  return (
    <>

      <SliderCat />
      <Category />
      <Products />
      <SupplyerBanner />
      <DailyBest />
      <ProductList />
      <Newsletter />
      <CategoryBanner />
      <MessengerCustomerChat pageId="324931041658048" appId="538498697606294" />

    </>
  );
};
