import React from 'react';

import './App.css';
import Footer from './Components/Shared/Footer/Footer';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import Category from './Components/Category/Category';
function App() {
  return (
    <div className="App">
     
      <Footer></Footer>
    
      <Category />

    </div>
  );
}

export default App;