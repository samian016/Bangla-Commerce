import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";
import { Link } from 'react-router-dom';

// import required modules
//import { Pagination } from "swiper";

const Category: React.FC = () => {
        interface ICategory {
                _id: string,
                categoryName: string,
                img: string
        }
        const [category, setCategory] = useState<ICategory[]>([]);

        useEffect(() => {
                fetch('https://blooming-chamber-05072.herokuapp.com/categories')
                        .then(res => res.json())
                        .then(data => setCategory(data))
        }, [])

        return (
                <div className='container-fluid category-section'>
                        <h2 className='ms-5'>Featured Categories</h2>
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
                                className="mySwiper myCustomSwiperContaienr px-5"
                        >
                                {category.map(singleCategory => <SwiperSlide className='myCustomSwiper' key={singleCategory._id}>
                                        <img style={{ width: "100px",height: "100px" }} src={singleCategory.img} alt="" />
                                        <h6>{singleCategory.categoryName}</h6>
                                        {/* <p>68 items</p> */}
                                </SwiperSlide>)}
                        </Swiper>
                        <div className="featuredCategories mt-4 px-5">
                                <div className="row align-items-md-stretch">
                                        <div className="col-md-4 mt-md-0 mt-4">
                                                <div className="h-100 p-5 bg-light border rounded-3" style={{ backgroundImage: 'url("https://i.ibb.co/XFFndSq/banner-1.png")', backgroundPosition: 'bottom right', backgroundSize: '100% 295px', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', minHeight: '295px' }}>
                                                        <div className='category-banner-text'>
                                                                <h5>Everyday Fresh &amp; Clean with <br /> Our Products</h5>
                                                                <Link to="/shop" className="btn btn-outline-secondary" type="button">Shop Now &rarr;</Link>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-4 mt-4 mt-md-0">
                                                <div className="h-100 p-5 bg-light border rounded-3" style={{ backgroundImage: 'url("https://i.ibb.co/RCKSwZ7/banner-2.png")', backgroundPosition: 'bottom right', backgroundSize: '100% 295px', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', minHeight: '295px' }}>
                                                        <div className='category-banner-text'>
                                                                <h5>Make your Breakfast <br /> Healthy and Easy</h5>
                                                                <Link to="/shop" className="btn btn-outline-secondary" type="button">Shop Now &rarr;</Link>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-4 mt-4 mt-md-0">
                                                <div className="featuredCategoryBanner h-100 p-5 bg-light border rounded-3" style={{ backgroundImage: 'url("https://i.ibb.co/42cnGSs/banner-3.png")', backgroundPosition: 'bottom right', backgroundSize: '100% 295px', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', minHeight: '295px' }}>
                                                        <div className='category-banner-text'>
                                                                <h5>The best Organic <br /> Products Online</h5>
                                                                <Link to="/shop" className="btn btn-outline-secondary" type="button">Shop Now &rarr;</Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Category;