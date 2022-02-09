import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";

// import required modules
//import { Pagination } from "swiper";

const Category = () => {
        return (
                <div className='container-fluid category-section'>
                        <h2>Featured Categories</h2>
                        <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                        clickable: true,
                                }}
                                breakpoints={{
                                        640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                        },
                                        768: {
                                                slidesPerView: 4,
                                                spaceBetween: 40,
                                        },
                                        1024: {
                                                slidesPerView: 8,
                                                spaceBetween: 50,
                                        },
                                }}
                                className="mySwiper myCustomSwiperContaienr"
                        >
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/93yC6W8/cat-1.png" alt="" />
                                        <h6>Headphone</h6>
                                        <p>68 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/Jk9NNx7/cat-2.png" alt="" />
                                        <h6>Cake &amp; Milk</h6>
                                        <p>54 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/Jk9NNx7/cat-2.png" alt="" />
                                        <h6>Cake &amp; Milk</h6>
                                        <p>54 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/93yC6W8/cat-1.png" alt="" />
                                        <h6>Headphone</h6>
                                        <p>68 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/Jk9NNx7/cat-2.png" alt="" />
                                        <h6>Cake &amp; Milk</h6>
                                        <p>54 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/Jk9NNx7/cat-2.png" alt="" />
                                        <h6>Cake &amp; Milk</h6>
                                        <p>54 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                                <SwiperSlide className='myCustomSwiper'>
                                        <img src="https://i.ibb.co/RGKhKfr/cat-3.png" alt="" />
                                        <h6>Organic Kiwi</h6>
                                        <p>44 items</p>
                                </SwiperSlide>
                        </Swiper>
                        <div className="featuredCategories mt-4">
                                <div className="row align-items-md-stretch">
                                        <div className="col-md-4">
                                                <div className="h-100 p-5 text-white bg-dark rounded-3">
                                                        <h2>Change the background</h2>
                                                        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                                                        <button className="btn btn-outline-light" type="button">Example button</button>
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                                <div className="h-100 p-5 bg-light border rounded-3">
                                                        <h2>Add borders</h2>
                                                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                                                        <button className="btn btn-outline-secondary" type="button">Example button</button>
                                                </div>
                                        </div>
                                        <div className="col-md-4">
                                                <div className="h-100 p-5 bg-light border rounded-3">
                                                        <h2>Add borders</h2>
                                                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                                                        <button className="btn btn-outline-secondary" type="button">Example button</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Category;