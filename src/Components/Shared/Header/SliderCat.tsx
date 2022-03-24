import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Categroy1 from "./../../../Image/category-1.svg"
import { Link } from 'react-router-dom';


const SliderCat: React.FC = () => {
    interface ICategory {
        _id: string,
        categoryName: string,
        img: string,
        length:number
    }
    const [category, setCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        fetch('https://blooming-chamber-05072.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div className='SliderCat d-flex mx-2 my-4'>
            {/* <div className="SliderCategory w-25 rounded shadow mx-4 p-4">
                <h4 className='fw-bolder pb-2 ms-3'>Category</h4>
                {
                    category.slice(0, 7).map(singleCategory => <div key={singleCategory._id} className='homeCategoryNav d-flex justify-content-between align-items-center my-3 mx-2 px-3 py-2 rounded fw-bold border text-center'>
                        <div>
                            <img width="35px" src={singleCategory.img} alt="Cat" />
                        </div>
                        <div>
                            <span>
                                {singleCategory.categoryName}
                            </span>
                        </div>
                        <div>
                            <span className='rounded-pill p-1 categoryCount'>
                                {singleCategory}
                            </span>
                        </div>
                    </div>)
                }
            </div> */}
            <div className='Slider w-100 px-3 rounded'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='slides slides1 rounded'>
                        <div className="p-5 mt-4">
                            <h1 className='display-2 primaryFontColor fw-bolder'>
                                Don't miss amazing<br />grocery deals
                            </h1>
                            <p className='h3 secondaryFontColor py-2'>Sign up for the daily newsletter</p>
                            <Link to="/shop"><div className='cursorPointer px-4 py-3 primaryBgColor text-white d-inline-block rounded-pill my-3'>
                                BUY NOW
                            </div></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slides slides2 rounded'>
                        <div className="p-5 mt-4">
                            <h1 className='display-2 primaryFontColor fw-bolder'>
                                Fresh Vegetables <br /> Big Discount
                            </h1>
                            <p className='h3 secondaryFontColor py-2'>Save up to 50% off on your first order</p>
                            <Link to="/shop"><div className='cursorPointer px-4 py-3 primaryBgColor text-white d-inline-block rounded-pill my-3'>
                                SHOP NOW
                            </div></Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SliderCat;


// const Category = () => {
//     return (
//         <div className='homeCategoryNav d-flex justify-content-between align-items-center my-3 mx-2 px-3 py-2 rounded fw-bold border text-center'>
//             <div>
//                 <img width="35px" src={Categroy1} alt="Cat" />
//             </div>
//             <div>
//                 <span>
//                     Clothing
//                 </span>
//             </div>
//             <div>
//                 <span className='rounded-pill p-1 categoryCount'>
//                     0
//                 </span>
//             </div>
//         </div>
//     )
// }