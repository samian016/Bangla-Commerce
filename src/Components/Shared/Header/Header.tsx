import React from 'react';
import Logo from "./../../../Image/logo.svg"
import "./Header.css"
import { BsSunrise, BsGrid, BsSearch, BsSuitHeart, BsFillCartCheckFill, BsPerson, BsPieChart, BsChevronDown } from "react-icons/bs";
import Headphone from "./../../../Image/icon-headphone.svg"
import { Link } from 'react-router-dom';
import SliderCat from './SliderCat';

const Header = () => {
    return (
        <>
            <nav className="top-header d-flex justify-content-between secondaryFontColor border-bottom align-items-center py-2 secondaryFont">
                <div className='d-flex justify-content-center'>
                    <Link to='/about'> <div className='px-2 border-end'>About Us</div> </Link>
                    <Link to='/login'><div className='px-2 border-end'>My Account</div></Link>
                    <Link to='/whishList'><div className='px-2 border-end'>Wishlist</div></Link>
                    <Link to='/orderTracking'><div className='px-2'>Order Tracking</div></Link>
                </div>
                <div>
                    <span>Supper Value Deals - Save more with coupons</span>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='px-2'>Need help? <span className='primaryColor'>Call Us:+ 1800 900</span></div>
                    <div className='px-2 border-end border-start'>English <BsChevronDown /> </div>
                    <div className='px-2'>USD <BsChevronDown /></div>
                </div>
            </nav>

            <nav className="secondaryFontColor mid-header d-flex justify-content-between align-items-center py-4 secondaryFont">
                <div className='main-logo w-25 ms-4'>
                    <Link to='/'><img src={Logo} alt="LOGO" /></Link>
                </div>
                <div className='d-flex justify-content-between w-75 borderRadius rounded align-items-center'>
                    <div className='border borderPrimary py-3 px-3'>
                        <span className='px-3 border-end'>All Category</span>
                        <input className='px-3 searchProduct' type="search" name="search" placeholder='Search for items..' />
                        <span> <BsSearch /></span>
                    </div>
                    <div className='d-flex'>
                        <Link to='/compare'>
                            <div className='mx-3 '>
                                <div className="iconSize align-items-center justify-content-center d-flex">
                                    <BsPieChart />
                                </div>
                                <span>Compare</span>
                            </div>
                        </Link>
                        <Link to='/whishList'>
                            <div className='mx-3'>
                                <div className="iconSize align-items-center justify-content-center d-flex">
                                    <BsSuitHeart />
                                </div>
                                <span>Wishlist</span>
                            </div>
                        </Link>

                        <Link to='/cart'>
                            <div className='mx-3'>
                                <div className="iconSize align-items-center justify-content-center d-flex">
                                    <BsFillCartCheckFill />
                                </div>
                                <span> Cart</span>
                            </div>
                        </Link>
                        <Link to='login'>
                            <div className='mx-3'>
                                <div className="iconSize align-items-center justify-content-center d-flex">
                                    <BsPerson />
                                </div>
                                <span> Account</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav >

            <nav className='primaryFont mid-header d-flex justify-content-between align-items-center py-2 border-top border-bottom'>
                <div className='w-25 mx-4 d-flex justify-content-between align-items-center '>
                    <div className="d-inline-block primaryBgColor px-3 py-2 text-white fw-bolder rounded">
                        <BsGrid /> <span>Browse All Categories <BsChevronDown /> </span>
                    </div>
                    <div className='fw-bold d-flex'>
                        <span className='primaryColor fw-bolder px-1'>
                            <BsSunrise />
                        </span>
                        <div><Link to="/shop">Hot Deals</Link></div>
                    </div>
                </div>
                <div className='w-75 d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center fw-bold'>
                        <div className='px-4'><Link to="/" className='active'>Home</Link></div>
                        <div className='px-4'><Link to="/about">About</Link></div>
                        <div className='px-4'><Link to="/shop">Shop</Link></div>
                        <div className='px-4'><Link to="/seller">Brands</Link></div>
                        <div className='px-4'><Link to="/blog">Blog</Link></div>
                        <div className='px-4'><Link to="/contact">Contact</Link></div>
                        <div className='px-4'><Link to="/terms">Policy</Link></div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='pe-2'>
                            <img src={Headphone} alt="HeadPhone Icon" />
                        </div>
                        <div>
                            <span className='h4 primaryColor fw-bold'>1900 - 888</span>
                            <br />
                            <span className='secondaryFont secondaryFontColor'>24/7 Support Center</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='pb-4'>
                <SliderCat />
            </div>
        </ >
    );
};

export default Header;