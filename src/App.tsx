import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import Category from './Pages/Category/Category';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import FAQ from './Pages/FAQ/FAQ';
import { Home } from "./Pages/Home/Home"
import LogIn from './Pages/LogIn/LogIn';
import Shop from './Pages/Shop/Shop';
import SignUp from './Pages/SignUp/SignUp';
import Terms from './Pages/Terms/Terms';
import Blog from './Pages/Blogs/Blogs';
import Seller from './Pages/Seller/Seller';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="category" element={<Category />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="seller" element={<Seller />} />
        <Route path="login" element={<LogIn />} />
        <Route path="singUp" element={<SignUp />} />
        <Route path="terms" element={<Terms />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="shop" element={<Shop/>} />
      </Routes>
    </>
  )
}

export default App;