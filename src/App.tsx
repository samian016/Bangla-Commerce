import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Category from "./Pages/Category/Category";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FAQ from "./Pages/FAQ/FAQ";
import { Home } from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Shop from "./Pages/Shop/Shop";
import SignUp from "./Pages/SignUp/SignUp";
import Terms from "./Pages/Terms/Terms";
import Blog from "./Pages/Blogs/Blogs";
import Seller from "./Pages/Seller/Seller";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import AccountDetails from "./Components/Dashboard/AccountDetails/AccountDetails";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import Address from "./Components/Dashboard/Address/Address";
import CategoryList from "./Components/Dashboard/CategoryList/CategoryList";
import AddCategroy from "./Components/Dashboard/AddCategory/Category";
import Order from "./Components/Dashboard/Order/Order";
import ProductApproval from "./Components/Dashboard/ProductApproval/ProductApproval";
import ProductList from "./Components/Dashboard/ProductList/ProductList";
import SellerList from "./Components/Dashboard/SellerList/SellerList";
import Welcome from "./Components/Dashboard/Welcome/Welcome";
import TrackOrder from "./Components/Dashboard/TrackOrder/TrackOrder";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import EditProduct from "./Components/Dashboard/AddProduct/EditProduct";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Sponsor from "./Components/Sponsor/Sponsor";
import FeaturedProducts from "./Components/Dashboard/FeaturedProducts/FeaturedProducts";
import Deals from "./Pages/Deals/Deals";
import Messenger from "./Components/Messenger/Messenger";
import Promotions from "./Components/Promotions/Promotions";
import SupportCenter from "./Components/SupportCenter/SupportCenter";
import PrivateOutlet from "./Components/PrivateOutlet/PrivateOutlet";
import Checkout from "./Pages/Checkout/Checkout";
import CategorizedShop from "./Pages/CategorizedShop/CategorizedShop";
import WriteBlog from "./Components/Dashboard/WriteBlog/WriteBlog";
import SingleBlog from "./Components/SingleBlog/SingleBlog";

import ViewCart from "./Pages/ViewCart/ViewCart";
import BlogList from "./Components/Dashboard/WriteBlog/BlogList";
import LoginRoute from "./Components/Routes/LoginRoute";
import AdminRoute from "./Components/Routes/AdminRoute";
import VendorRoute from "./Components/Routes/VendorRoute";
import OrderStatus from "./Components/Dashboard/Order/OrderStatus";

function App() {
  interface IProducts {
    _id: string;
    ProductTitle: string,
    Category: string,
    Stock: number,
    image: string,
    rating: number,
    shortDescription: string,
    additionalInfo: string,
    regularPrice: number,
    discountPrice: number,
    discountPercentage: number,
    sku: string,
    isApproved: boolean,
    adminChecked: boolean,
    sellerID: string,
    quantity: number,
  }

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/supportCenter" element={<SupportCenter />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="category" element={<Category />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="shop" element={<Shop />} />
          <Route path="deals" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="seller" element={<Seller />} />
          <Route path="singleProduct/:productID" element={<SingleProduct />} />
          <Route path="singleBlog/:blogID" element={<SingleBlog />} />
          <Route path="login" element={<LoginRoute>
            <LogIn />
          </LoginRoute>} />
          <Route path="singUp" element={<LoginRoute>
            <SignUp />
          </LoginRoute>} />
          <Route path="terms" element={<Terms />} />
          <Route path="category/:id" element={<CategorizedShop />} />
          <Route path="categoryWise/:id" element={<CategorizedShop />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="checkout" element={<Checkout />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="account-details" element={<AccountDetails />} />
              <Route path="add-product" element={<VendorRoute><AddProduct /></VendorRoute>} />
              <Route path="edit-product/:productID" element={<AdminRoute>
                <EditProduct />
              </AdminRoute>} />
              <Route path="featured-products" element={<AdminRoute><FeaturedProducts /></AdminRoute>} />
              <Route path="address" element={<Address />} />
              <Route path="category-list" element={<AdminRoute><CategoryList /></AdminRoute>} />
              <Route path="add-category" element={<AdminRoute><AddCategroy /></AdminRoute>} />
              <Route path="write-blog" element={<WriteBlog />} />
              <Route path="blogList" element={<AdminRoute><BlogList /></AdminRoute>} />
              <Route path="order" element={<Order />} />
              <Route path="orderStatus" element={<OrderStatus />} />
              <Route path="makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="product-approval" element={<AdminRoute><ProductApproval /></AdminRoute>} />
              <Route path="product-list" element={<AdminRoute><ProductList /></AdminRoute>} />
              <Route path="track-order" element={<TrackOrder />} />
              <Route path="seller-list" element={<AdminRoute><SellerList /></AdminRoute>} />
              <Route index element={<Welcome />} />
            </Route>
          </Route>


          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cart" element={<ViewCart />} />
        </Routes>
        <Messenger />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
