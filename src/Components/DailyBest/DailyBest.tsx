import React, { useEffect, useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useCart } from "react-use-cart";
// import required modules
import { FreeMode, Navigation } from "swiper";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const DailyBest = () => {
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
        id: string,
        price: number,
        quantity?: number,
        itemTotal?: number,
        [key: string]: any
    }
    const [products, setProducts] = useState<IProducts[]>([]);
    const { addItem } = useCart();
    useEffect(() => {
        fetch('https://blooming-chamber-05072.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='mx-5'>
            <div className='container-fluid'>
                <div>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid d-flex">
                            <div> <h2 className='best-sales'>Daily Best sells</h2></div>
                            <div>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <p className="nav-link best-li" aria-current="page">Featured</p>
                                        </li>
                                        <li className="nav-item">
                                            <p className="nav-link best-li">Popular</p>
                                        </li>
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="/">Pricing</a> */}
                                            {/* <Link className="nav-link bg-dark" to='/'> Price</Link> */}
                                        </li>
                                        <li className="nav-item">
                                            <p className="nav-link best-li">New Added</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className='d-flex best-padding'>
                        <div className='best-banner' style={{ paddingBottom: "100px", paddingLeft: "50px", paddingRight: "100px", marginRight: "10px", width: "30%" }}>
                            <h2 className="banner-text">Bring nature into your home</h2>
                            <Link to={"/shop"} className="btn btn-xs">Shop Now !</Link>
                        </div>
                        <div style={{ width: "70%" }}>


                            <Swiper
                                
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

                                modules={[FreeMode, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    products.map(product => <SwiperSlide key={product._id} >
                                        <div style={{ height: "520px", borderRadius: "20px" }}>
                                            <div style={{ width: "100%", position: "relative", height: "520px", borderRadius: "20px" }} className="card ">
                                                <img style={{ width: "70%" }} src={product.image} className="card-img-top mx-auto" alt="..." />
                                                <div className="card-body">
                                                    <h5 style={{ color: "#253D4E" }} className="card-title">{product.ProductTitle}</h5>
                                                    <h6 style={{ fontSize: "8px" }}>
                                                        <Rating
                                                            readonly
                                                            initialRating={product.rating}
                                                            fullSymbol="fa fa-star fa-2x filled"
                                                            emptySymbol="fa fa-star-o fa-2x notFilled">
                                                        </Rating>
                                                    </h6>
                                                    <h6 style={{ color: "#3BB77E" }}>${product.discountPrice}  </h6>

                                                    {
                                                        /* <div style={{ height: "5px", background: "black" }} >
                                                            <div style={{background:"white", maxWidth:"50%"}}> </div>
                                                        </div> */
                                                    }

                                                    {/* <p className="card-text"> 90/120 </p> */}
                                                    <p>{product.shortDescription.slice(0, 100)}</p>

                                                </div>
                                                <div className="mx-auto d-flex">
                                                    <Link className='m-2' style={{ color: "white", background: "#3BB77E", fontWeight: "bold", padding: "5px 10px", border: "2px solid #3BB77E", borderRadius: '5px' }} to={`/singleProduct/${product._id}`}>View Product</Link>
                                                    <button onClick={() => addItem(product)} className='m-2' style={{ color: "white", background: "#3BB77E", fontWeight: "bold", padding: "5px 10px", border: "2px solid #3BB77E", borderRadius: '5px' }}> Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                                }
                            </Swiper>


                        </div>
                    </div>
                </div>
            </div >
       </div>
    );
};

export default DailyBest;