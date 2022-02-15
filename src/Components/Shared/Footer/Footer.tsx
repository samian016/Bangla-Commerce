import React from 'react';
import logo1 from './images/logo.png';
import logo2 from './images/app-store.jpg';
import logo3 from './images/google-play.jpg';
import logo4 from './images/payment-method.png';

const Footer = () => {
    return (
        <div className='container-fluid mt-2'>
            <div className=''>
                <h1 className='text-white text-center'>This is footer</h1>
                <div className="my-2">
                    <div className="row g-2">
                        <div className="col-lg-2">
                            <div className="p- border bg-light"> 
                            <div className="logo">
                                <img className='img-fluid' src={logo1} alt=""/>
                            </div>
                            <div>
                                <h5>Awesome grocery store website template</h5>
                            </div>
                            <div>
                                <h6>Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</h6>
                            </div>
                            <div>
                                <h6>Call Us:(+91) - 540-025-124553</h6>
                            </div>
                            <div>
                                <h6>Email:sale@Nest.com</h6>
                            </div>
                            <div>
                                <h6>Hours:10:00 - 18:00, Mon - Sat</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">
                                <h6>Company</h6>
                                <h6>About Us</h6>
                                <h6>Delivery Information</h6>
                                <h6>Privacy Policy</h6>
                                <h6>Contact Us</h6>
                                <h6> Support Center</h6>
                                <h6>Careers</h6>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">
                                <h1>Account</h1>
                                <h6>Sign In</h6>
                                <h6>View Cart</h6>
                                <h6>My Wishlist</h6>
                                <h6>Track My Order</h6>
                                <h6>Help Ticket</h6>
                                <h6>Shipping Details</h6>
                                <h6>Compare products</h6>
                                
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">
                                <h1>Corporate</h1>
                                <h6>Become a Vendor</h6>
                                <h6>Affiliate Program</h6>
                                <h6>Farm Business</h6>
                                <h6>Farm Careers</h6>
                                <h6>Our Suppliers</h6>
                                <h6>Accessibility</h6>
                                <h6>Promotions</h6>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">
                                <h1>Popular</h1>
                                <h6>Milk & Flavoured Milk</h6>
                                <h6>Butter and Margarine</h6>
                                <h6>Eggs Substitutes</h6>
                                <h6>Marmalades</h6>
                                <h6>Sour Cream and Dips</h6>
                                <h6>Tea & Kombucha</h6>
                                <h6>Cheese</h6>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">
                                <h1>Install Apps</h1>
                                <h5>From Apps Store or Google Play</h5>
                                <div>
                                    <a href="">
                                    <img src={logo2} alt="" className="img-fluid"/>
                                    </a>
                                    <a href="">
                                    <img src={logo3} alt="" className="img-fluid"/>
                                    </a>
                                </div>
                                <div>
                                    <h5>Secured Payment Gateways</h5>
                                    <a href="">
                                    <img src={logo4} alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;