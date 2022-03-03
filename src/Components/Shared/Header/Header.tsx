import React from 'react';
import Logo from "./../../../Image/logo.png"
import "./Header.css"
import { BsFillPersonLinesFill, BsGrid, BsSearch, BsSuitHeart, BsFillCartCheckFill, BsPerson, BsPieChart, BsChevronDown, BsLightning, BsFillPersonXFill, BsPinMap, BsTextParagraph, BsJustifyLeft } from "react-icons/bs";
import Headphone from "./../../../Image/icon-headphone.svg"
import { Link } from 'react-router-dom';
import useFirebase from '../../../firebase/useFirebase/useFirebase';

const Header = () => {
    const {
        logOut,
        isLogged
    } = useFirebase();
    return (
        <>
            <div className='desktop-menu'>
                <nav className="top-header d-flex justify-content-between secondaryFontColor border-bottom align-items-center py-2 secondaryFont">
                    <div className='d-flex justify-content-center'>
                        <Link to='/about'> <div className='px-2 border-end'>About Us</div> </Link>
                        <Link to='/login'><div className='px-2 border-end'>My Account</div></Link>
                        <Link to='/whishList'><div className='px-2 border-end'>Wishlist</div></Link>
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
                        <div className='d-flex text-center'>
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
                            <div className='mx-3 dropDownMenu'>
                                {
                                    isLogged ? <Link to='#'>
                                        <div className="iconSize align-items-center justify-content-center d-flex">
                                            <BsPerson />
                                        </div>
                                        <span> Account</span>
                                    </Link> : <Link to='login'>
                                        <div className="iconSize align-items-center justify-content-center d-flex">
                                            <BsPerson />
                                        </div>
                                        <span> Account</span>
                                    </Link>
                                }
                                <div className="dropDown px-3 py-3 rounded">
                                    <div className="dropDownList rounded px-3 py-2 d-flex">
                                        <div className="pe-2 dropDownIcon iconSize align-items-center justify-content-center d-flex">
                                            <BsFillPersonLinesFill />
                                        </div>
                                        <span> <Link to='/dashboard' className='dropDownText'>My Account</Link> </span>
                                    </div>
                                    <div className="dropDownList rounded px-3 py-2 d-flex">
                                        <div className="pe-2 dropDownIcon iconSize align-items-center justify-content-center d-flex">
                                            <BsSuitHeart />
                                        </div>
                                        <span> <Link to='/dashboard' className='dropDownText'>My Wishlist</Link> </span>
                                    </div>
                                    {/* <div className="dropDownList rounded px-3 py-2 d-flex">
                                    <div className="pe-2 dropDownIcon iconSize align-items-center justify-content-center d-flex">
                                        <BsPinMap />
                                    </div>
                                    <span> <Link to='/dashboard' className='dropDownText'>Order Tracking</Link> </span>
                                </div> */}
                                    <div className="dropDownList rounded px-3 py-2 d-flex">
                                        <div className="pe-2 dropDownIcon iconSize align-items-center justify-content-center d-flex">
                                            <BsTextParagraph />
                                        </div>
                                        <span> <Link to='/dashboard' className='dropDownText'>Setting</Link> </span>
                                    </div>
                                    <div className="dropDownList rounded px-3 py-2 d-flex">
                                        <div className="pe-2 dropDownIcon iconSize align-items-center justify-content-center d-flex">
                                            <BsFillPersonXFill />
                                        </div>
                                        <span> <Link to='#' onClick={logOut} className='dropDownText'>Sign out</Link> </span>
                                    </div>
                                </div>
                            </div>
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
                                <BsLightning />
                            </span>
                            <div><Link to="/shop">Deals</Link></div>
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
                            <div className='px-4'><Link to="/faq">FAQ</Link></div>
                        </div>
                        <div className="headerPhone">
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

                    </div>
                </nav>

            </div>
            {/* Navigation For Mobile  */}
            <div className="mobile-menu">
                <div className='primaryBgColor text-white py-2 text-center'>
                    <span>Grand opening, up to 15%  off all items.</span>
                </div>
                <nav className=' d-flex justify-content-between py-3 px-2'>
                    <div className='d-flex '>
                        <div className="pe-2 iconSize align-items-center justify-content-center d-flex primaryFontColor">
                            <BsJustifyLeft />
                        </div>

                    </div>
                    <div>
                        <img width="180px" src={Logo} alt="Mobile Logo" />
                    </div>
                    <div className='d-flex'>
                        <div className="pe-2 iconSize align-items-center justify-content-center d-flex primaryFontColor">
                            <BsSuitHeart />
                        </div>
                        <div className="pe-2 iconSize align-items-center justify-content-center d-flex primaryFontColor">
                            <BsFillCartCheckFill />
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
};

export default Header;