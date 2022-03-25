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
                            <Link to={"/shop"} className="btn btn-xs bg-white text-success">Shop Now !</Link>
                        </div>
                        <div style={{ width: "70%" }}>


                            <Swiper
                                style={{ marginLeft: "auto" }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    1524: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                }}

                                modules={[FreeMode, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    products.map(product => <SwiperSlide key={product._id} >
                                        <div style={{ height: "520px", borderRadius: "20px" }}>
                                            <div className='h-100 card' style={{ height: "520px", borderRadius: "20px" }}>
                                                <div className='p-3' style={{  borderRadius: "20px", height:"40%" }}>
                                                    <div className='h-100' style={{borderRadius: "20px" }}>
                                                            <img  style={{  borderRadius: "20px" ,height:"40%" }} className='w-100 h-100' src={product.image} alt="" />
                                                    </div>
                                                </div>
                                                <div className='p-3' style={{ borderRadius: "20px",height:"60%" }}>
                                                    <div className='h-100' style={{ borderRadius: "20px" }}>
                                                        <div>
                                                                    <h6 style={{ color: "#253D4E", fontWeight: "bold"}}>{product.ProductTitle}</h6>

                                                            <p style={{  color: "#253D4E" }}>{product.shortDescription.slice(0, 70)}</p>
                                                            <div className='d-flex' style={{alignItems:"center"}}>
                                                                <p className='me-5' style={{ fontWeight: "bold", color: "#adadad" }}>{product.Category}</p>
                                                                <p style={{ fontSize: "6px" }}>
                                                                    <Rating
                                                                        readonly
                                                                        initialRating={product.rating}
                                                                        fullSymbol="fa fa-star fa-2x filled"
                                                                        emptySymbol="fa fa-star-o fa-2x notFilled"
                                                                    >
                                                                    </Rating></p>
                                                           </div>
                                                            <div style={{ borderRadius: "20px", display: "flex" }}>
                                                                <h6 className='me-2' style={{ color: "#3BB77E", fontWeight: "bold"  }}>${product.discountPrice}  </h6>
                                                                <h6 style={{ color: "#253D4E", fontWeight: "bold", textDecorationLine: "line-through" }}>${product.regularPrice}  </h6>
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{backgroundColor:"transparent"}} className="mx-auto d-flex my-2 card-footer">
                                                    <Link className='me-1' style={{ color: "white", background: "#3BB77E", fontWeight: "bold", padding: "5px 10px", border: "2px solid #3BB77E", borderRadius: '5px' }} to={`/singleProduct/${product._id}`}>View Product</Link>
                                                    <button onClick={() => addItem(product)} className='ms-1' style={{ color: "white", background: "#3BB77E", fontWeight: "bold", padding: "5px 10px", border: "2px solid #3BB77E", borderRadius: '5px' }}> Add To Cart</button>
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
/* <div style={{ height: "520px", borderRadius: "20px" }}>
                                            <div style={{ width: "100%", position: "relative", height: "520px", borderRadius: "20px" }} className="card ">
                                                <div className='product h-100' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                                    <div className='h-50' style={{ textAlign: "center", position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                                        <div className='product-image' style={{ position: "relative", overflow: "hidden", borderRadius: "15px", textAlign: "center" }}>
                                                            
                                                            <Link to={`/singleProduct/${product._id}`} className='view-details-button'>View Details</Link>
                                                        </div>
                                                </div>
                                                <div className="card-body">
                                                        <div>
                                                            
                                                        </div>
                                                        <h6 style={{ color: "#3BB77E" }}>${product.discountPrice}  </h6>


                                                        <p>{product.shortDescription.slice(0, 70)}</p>

                                                </div>
                                                <div className="mx-auto d-flex my-2 card-footer">
                                                    <Link className='me-1' style={{ color: "white", background: "#3BB77E", fontWeight: "bold", padding: "5px 10px", border: "2px solid #3BB77E", borderRadius: '5px' }} to={`/singleProduct/${product._id}`}>View Product</Link>
                                                    <button onClick={() => addItem(product)} className='ms-1' style={{ color: "white", background: "#3BB77E", fontWeight: "bold", padding: "5px 10px", border: "2px solid #3BB77E", borderRadius: '5px' }}> Add To Cart</button>
                                                </div>
                                            </div>
                                            </div>
                                            </div> */