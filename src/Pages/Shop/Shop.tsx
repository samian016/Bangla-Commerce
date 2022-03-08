import React from 'react';
import Rating from 'react-rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Shop.css'

const Shop = () => {
    return (
        <div>
            <div style={{ marginTop: "30px", marginBottom: "50px" }}>
                <div
                    style={{}}
                    className="size"
                >
                    <div
                        className='archive-header'
                    >
                        <div className='row alignItemsCenter' >
                            <div className='col-xl-3'>
                                <h1 style={{ marginBottom: "15px", fontSize: "48px", fontFamily: "Quicksand", fontWeight: "700", color: "#253D4E" }}>Snack</h1>
                            </div>
                            <div className='col-xl-9 text-end d-none d-xl-block'>
                                <ul style={{ listStyle: "none", display: "flex", justifyContent: "flex-end" }}>
                                    <li >
                                        <a href="/" className='hover-up' style={{ textDecoration: "none", cursor: "pointer" }} > <i className='fas fa-times' style={{ marginRight: "10px" }}></i> Cabbage</a>


                                    </li>
                                    <li >
                                        <a href="/" className='hover-up' style={{ textDecoration: "none", cursor: "pointer" }} > <i className='fas fa-times' style={{ marginRight: "10px" }}></i> Broccoli</a>


                                    </li>
                                    <li >
                                        <a href="/" className='hover-up' style={{ textDecoration: "none", cursor: "pointer" }} > <i className='fas fa-times' style={{ marginRight: "10px" }}></i> Artichoke</a>


                                    </li>
                                    <li >
                                        <a href="/" className='hover-up' style={{ textDecoration: "none", cursor: "pointer" }} > <i className='fas fa-times' style={{ marginRight: "10px" }}></i> Celery</a>


                                    </li>
                                    <li >
                                        <a href="/" className='hover-up' style={{ textDecoration: "none", cursor: "pointer" }} > <i className='fas fa-times' style={{ marginRight: "10px" }}></i> Spanich</a>


                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='size'>
                    <p style={{ marginTop: " 4%", marginBottom: "2%", fontWeight: "400", fontSize: "1.2rem" }}>we Found <span style={{ color: "#3BB77e" }} >29</span>  items for you!</p>
                    <div className="row">
                        <div style={{}} className="col-sm-12 col-lg-10">




                            <div className="row border-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">


                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="	http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 col-12">
                                    <div className='hover' style={{ visibility: "visible", backgroundColor: "white", overflow: "hidden", }}>
                                        <div style={{ position: "relative", backgroundColor: "white", overflow: "hidden", maxHeight: "320px", padding: " 25px 25px 0px 25px" }}>
                                            <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                <img style={{ width: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div style={{ padding: "0px 20px 20px 20px" }}>
                                            <div style={{ marginBottom: "5px" }}>
                                                <p style={{ fontWeight: "bold", color: "#adadad" }} className="">Meats</p>
                                            </div>
                                            <h6 style={{ color: "#253D4E", fontWeight: "bold" }}>Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400gm</h6>
                                            <div style={{ fontSize: "inherit", verticalAlign: "baseline" }}>
                                                <h6 style={{ fontSize: "6px" }}>
                                                    <Rating

                                                        readonly
                                                        initialRating={3}
                                                        fullSymbol="fa fa-star fa-2x filled"
                                                        emptySymbol="fa fa-star-o fa-2x"
                                                    >

                                                    </Rating>
                                                </h6>
                                            </div>
                                            <div>
                                                <p> <span style={{ fontWeight: "bold", color: "#adadad" }} >By</span> <span style={{ fontWeight: "bold", color: "#3BB77E" }}>NestlyFood</span> </p>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                                <div style={{ paddingTop: "5px" }}>
                                                    <h6 style={{ fontWeight: "bold", color: "#3BB77E" }}>$32.0 <span style={{ fontWeight: "bold", color: "#adadad", textDecorationLine: "line-through" }} >$35.0</span> </h6>
                                                </div>
                                                <div>
                                                    <button type="button" style={{ backgroundColor: "#3BB77E", color: "white", fontWeight: "bold" }} className="btn "> <i className="fa-solid fa-cart-flatbed"></i>  Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>



                            {/* here is the pagination  */}
                            <nav className='my-5'>
                                <ul className="justify-content-center pagination">
                                    <li className="page-item disabled">
                                        <span style={{ backgroundColor: "#ffd900", fontWeight: "bold", margin: "0px 5px" }} className="page-link">Previous</span>
                                    </li>
                                    <li className="page-item"><a style={{ backgroundColor: "#3BB77E", borderRadius: "20px", color: "white", fontWeight: "bold", margin: "0px 5px" }} className="page-link" href="/">1</a></li>
                                    <li className="page-item active" aria-current="page">
                                        <span style={{ backgroundColor: "#3BB77E", borderRadius: "20px", color: "white", fontWeight: "bold", margin: "0px 5px" }} className="page-link">2</span>
                                    </li>
                                    <li className="page-item"><a style={{ backgroundColor: "#3BB77E", borderRadius: "20px", color: "white", fontWeight: "bold", margin: "0px 5px" }} className="page-link" href="/">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" style={{ backgroundColor: "#ffd900", fontWeight: "bold", margin: "0px 5px", color: "#3BB77E" }} href="/">Next</a>
                                    </li>
                                </ul>
                            </nav>









                            {/* Extra Swiper here  */}

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





                            {/* Side bar is here  */}




                        </div>
                        <div style={{}} className="col-lg-2 col-sm-12" >


                            <div className='sidebar-widget mb-30' style={{ marginTop: "8%" }}>
                                <h5 className='section-title'>
                                    Category
                                </h5>
                                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none" }} href="/">
                                            <img className='img' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" />
                                            Milks and Dudu
                                        </a>
                                        <span> 4</span>
                                    </li>
                                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none" }} href="/">
                                            <img className='img' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg" alt="" />
                                            Clothing
                                        </a>
                                        <span>5</span>
                                    </li>
                                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none" }} href="/">
                                            <img className='img' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg" alt="" />
                                            Baking Materials
                                        </a>
                                        <span>7</span>
                                    </li>
                                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none" }} href="/">
                                            <img className='img' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg" alt="" />
                                            Pet Foods
                                        </a>
                                        <span>9</span>
                                    </li>
                                    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none" }} href="/">
                                            <img className='img' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg" alt="" />
                                            Fresh Fruits
                                        </a>
                                        <span>40</span>
                                    </li>
                                </ul>
                            </div>

                            <div className='sidebar-widget mb-30' style={{ marginTop: "8%" }}>

                                <h5 className='section-title'>
                                    New Product
                                </h5>
                                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                                    <li style={{ padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none", alignItems: "center", justifyContent: "center", alignContent: "center" }} href="/">
                                            <img className='img2' src="	http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg" alt="" />
                                            <div style={{ display: "block" }}>
                                                <h5 style={{ color: "#3BB77E" }}>Mango Juice</h5>
                                                <p style={{ color: "#3BB77E" }}>$15.00</p>
                                            </div>
                                        </a>

                                    </li>
                                    <li style={{ padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none", alignItems: "center", justifyContent: "center", alignContent: "center" }} href="/">
                                            <img className='img2' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg" alt="" />
                                            <div style={{ display: "block" }}>
                                                <h5 style={{ color: "#3BB77E" }}>Banana sake</h5>
                                                <p style={{ color: "#3BB77E" }}>$14.00</p>
                                            </div>
                                        </a>

                                    </li>
                                    <li style={{ padding: "10px 0px" }}>
                                        <a className='a' style={{ display: "flex", textDecoration: "none", alignItems: "center", justifyContent: "center", alignContent: "center" }} href="/">
                                            <img className='img2' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg" alt="" />
                                            <div style={{ display: "block" }}>
                                                <h5 style={{ color: "#3BB77E" }}>Color Jack</h5>
                                                <p style={{ color: "#3BB77E" }}>$30.00</p>
                                            </div>
                                        </a>

                                    </li>

                                </ul>
                            </div>


                            <div style={{ visibility: "visible", position: "relative", clear: "both", borderRadius: "10px", overflow: "hidden" }}>
                                <img style={{ maxWidth: "100%" }} src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png" alt="" />
                                <div className='banner-txt'>
                                    <span style={{ color: "#253D4E" }}> organic </span>
                                    <h4>
                                        Save 17% <br />
                                        on <span style={{ color: "#3BB77E" }}>Organic</span> <br />
                                        Juice
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;