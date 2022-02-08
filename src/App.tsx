import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";

import { Pagination } from "swiper";

function App() {
  return (
    <div>
      <div className='container-xxl'>
        <div>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid d-flex">
              <div> <h2 className='best-sales'>Daily Best sells</h2></div>
              <div>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link best-li" aria-current="page" href="/">Featured</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link best-li" href="/">Popular</a>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="/">Pricing</a> */}
                      {/* <Link className="nav-link bg-dark" to='/'> Price</Link> */}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link best-li" href="/">New Added</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div>
          <div className='d-flex best-padding'>
            <div className='best-banner' style={{ paddingBottom:"100px", paddingLeft:"50px",paddingRight:"100px",marginRight:"10px"}}>
              <h2 className="banner-text">Bring nature into your home</h2>
              <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
            </div>
            <div style={{ border: "3px red solid" }}>
              
            
                <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={true}
                
                className="mySwiper"
                >
                  <SwiperSlide>slide 1</SwiperSlide>
                  <SwiperSlide>slide 2</SwiperSlide>
                  <SwiperSlide>slide 3</SwiperSlide>
                  <SwiperSlide>slide 4</SwiperSlide>
                  <SwiperSlide>slide 5</SwiperSlide>
                  <SwiperSlide>slide 6</SwiperSlide>
                  <SwiperSlide>slide 7</SwiperSlide>
                  <SwiperSlide>slide 8</SwiperSlide>
                  <SwiperSlide>slide 9</SwiperSlide>
                  <SwiperSlide>slide 10</SwiperSlide>

                </Swiper>
           
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
