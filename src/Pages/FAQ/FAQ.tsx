import React from 'react';
import faq from './img/Fa.png';
import banner from './img/faq-banner.png';
import './FAQ.css';
const FAQ = () => {
    return (
        <div className='container overflow-hidden'>

            <>
            {/* header title image */}

                <div className='text-center'>
                   
                        <img className='w-25' src={faq} alt="" />
                   

                </div>
                {/* <h1 className='primaryFontColor fw-bold text-center my-3'>FAQ</h1> */}


                {/* header first section Bangla E-commerce */}
                <div className=''>
                    
                        <h5 className='fw-bold primaryFont primaryFontColor'>What is Bangla E-Commerce.com?</h5>

                    
                    <p className='secondaryFont text-secondary'>Bangla E-Commerce is a leading online retailer of products that inform, educate, and inspire. The Amazon group also has stores in the Canada, Germany, France, Japan and United Kingdom. Because we exist "virtually" on the Web, we have unlimited shelf space and can offer a selection of over 17 million titles including over 13 million Book titles and over 1 million music titles. Compare that to a typical physical-world book superstore, which carries around 170,000 books, or a typical physical-world music superstore, which carries around 34,000 CDs.</p>
                </div>

                {/* by using gutter (reactbootstrap) */}

                <div className="container my-5">
                    <div className="row g-2">

                        {/* Right side FAQ banner imager */}

                        <div className="col-lg-6 col-md-6">
                            <div className="p-3">
                            
                                    <img className='img-fluid' src={banner} alt="" />
                                
                            </div>
                        </div>

                        {/* accordion section start from here (10 collapseOne) */}
                        <div className="col-lg-6 col-md-6">
                            <div className="p-3 rounded shadow">

                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Who we are?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>Bangla E-Commerce </strong> is a leading online retailer of products that inform, educate, and inspire. The Amazon group also has stores in the Canada, Germany, France, Japan and United Kingdom.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Why Bangla commerce
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>Frauds</strong> are working actively nationwide that’s why peoples are hopeless shopping online. We are dealing with trust and honesty.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Transaction method
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                You are <strong> welcome </strong> to deal with us using master, visa card. Also allowed to cash on delivery method.</div>
                                        </div>
                                    </div>
                                   
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* footer last part discounted section */}

                <div>
                    <h5 className='fw-bold'>Why are some titles discounted while others are not?</h5>
                    <p className='text-secondary'>Our decision to discount products is made internally and based on a number of strategic considerations which can vary over time. As it stands now, we offer discounts on hundreds of thousands of selected titles. However we cannot confirm when, if ever, a title will be discounted or how long a title once discounted will remain so.</p>
                </div>

            </>

        </div>
    );
};

export default FAQ;