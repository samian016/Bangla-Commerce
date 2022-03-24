import React from 'react';
import logo1 from './../../../Image/logo.png';
import logo2 from './images/app-store.jpg';
import logo3 from './images/google-play.jpg';
import logo4 from './images/payment-method.png';
import useAuth from '../../../Hooks/useAuth';
import './Footer.css';
import { Link } from 'react-router-dom';

{/* <Link to=""></Link> */ }



const Footer = () => {

    const { user } = useAuth();

    return (
        <div className='container-fluid overflow-hidden mt-3'>
            <div className='mx-5'>
                <div className="my-3">
                    <div className="row g-2">
                        <div className="col-lg-4">
                            <div className="p-3">
                                <div className="logo">
                                    <img className='img-fluid' src={logo1} alt="Footer Logo" />
                                </div>
                                {/* <div>
                                    <p className='fw-bold'>Awesome grocery store website template</p>
                                </div> */}
                                <div>
                                    <h6 className='fw-thin'>
                                        <span className='fw-bold'>Address: </span>
                                        Dhaka, Bangladesh</h6>
                                </div>
                                <div>
                                    <h6 className='fw-thin'>
                                        <span className='fw-bold'>Call Us: </span>
                                        +880 1822773541</h6>
                                </div>
                                <div>
                                    <h6 className='fw-thin'>
                                        <span className='fw-bold'>Email: </span>
                                        sale@BanglaCommarce.com</h6>
                                </div>
                                <Link to="/sponsors"><div className='cursorPointer py-1 px-3 primaryBgColor text-white d-inline-block rounded-pill'>
                                    Our Sponsors
                                </div></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h5 className='font-h6'>Company</h5>
                                <Link to="/about">
                                    <h6 className='font-h6'>About Us</h6>
                                </Link>

                                {/* <h6 className='font-h6'>Delivery Information</h6> */}
                                <Link to="/terms">
                                    <h6 className='font-h6'>Privacy Policy</h6>
                                </Link>

                                <Link to="/contact">
                                    <h6 className='font-h6'>Contact Us</h6>
                                </Link>
                                <Link to="/supportCenter">
                                    <h6 className='font-h6'> Support Center</h6>
                                </Link>

                                {/* <h6 className='font-h6'>Careers</h6> */}
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 ">
                                <h5 className='font-h1'>Account</h5>
                                {
                                    user ? [] : <Link to="/login">
                                        <h6 className='font-h6'>Sign In</h6>
                                    </Link>
                                }
                                <Link to="/cart">
                                    <h6 className='font-h6'>View Cart</h6></Link>

                                {/* <h6 className='font-h6'>My Wishlist</h6> */}
                                {/* <h6 className='font-h6'>Track My Order</h6> */}
                                <Link to="/contact">
                                    <h6 className='font-h6'>Help Ticket</h6>
                                </Link>
                                {/* <h6 className='font-h6'>Shipping Details</h6>
                                <h6 className='font-h6'>Compare products</h6> */}

                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h1 className='font-h1'>Account</h1>
                                <a href="#"><h6 className='font-h6 mt-4'>Sign In</h6></a>
                                <a href="#"><h6 className='font-h6'>View Cart</h6></a>
                                <a href="#"><h6 className='font-h6'>My Wishlist</h6></a>
                                <a href="#"><h6 className='font-h6'>Track My Order</h6></a>
                                <a href="#"><h6 className='font-h6'>Help Ticket</h6></a>
                                <a href="#"><h6 className='font-h6'>Shipping Details</h6></a>
                                <a href="#"><h6 className='font-h6'>Compare products</h6></a>

                            </div>
                        </div> */}
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h5 className='font-h1'>Corporate</h5>

                                {
                                    user ? [] : <Link to="/singUp">
                                        <h6 className='font-h6 mt-4'>Become a Vendor</h6>
                                    </Link>
                                }


                                {/* <a href="#"><h6 className='font-h6'>Affiliate Program</h6></a>
                                <a href="#"><h6 className='font-h6'>Farm Business</h6></a>
                                <a href="#"><h6 className='font-h6'>Farm Careers</h6></a> */}
                                <Link to="/seller">
                                    <h6 className='font-h6'>Our Suppliers</h6>
                                </Link>
                                {/* <a href="#"><h6 className='font-h6'>Accessibility</h6></a> */}
                                <Link to="/promotions">
                                    <h6 className='font-h6'>Promotions</h6>
                                </Link>


                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h5 className='font-h1'>Popular</h5>
                                <Link to="/shop">
                                    <h6 className='font-h6'>Milk & Flavoured Milk</h6>
                                </Link>
                                {/* <h6 className='font-h6'>Butter and Margarine</h6>
                                <h6 className='font-h6'>Eggs Substitutes</h6>
                                <h6 className='font-h6'>Marmalades</h6>
                                <h6 className='font-h6'>Sour Cream and Dips</h6>
                                <h6 className='font-h6'>Tea & Kombucha</h6>
                                <h6 className='font-h6'>Cheese</h6> */}

                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h1 className='font-h1'>Apps</h1>
                                <h5 className='font-h6'>From Apps Store or Google Play</h5>
                                <div className='my-4'>

                                    <img src={logo2} alt="" className="w-50 p-1" />

                                    <img src={logo3} alt="" className="w-50 p-1" />



                                </div>
                                <div>
                                    <img src={logo4} alt="" className="img-fluid my-3" />



                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* 2nd footer */}

                    <div className="">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className='text-secondary text-center'>© 2022,<span className='text-success fw-bold'> Strangers EndGame </span> <span>All rights reserved</span></p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



        </div>
    );
};

export default Footer;