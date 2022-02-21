import React from "react";
import "./Contact.css";

import contact2 from "../../asset/Icon/contact-2.png";

const Contact = () => {
  return (
    <div className="page-content pt-5 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="row align-items-end mb-5">
              <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                <h3 className="mb-2 text-brand">How can help you?</h3>
                <h1 className="mb-2">Let us know how we can help you</h1>
                <p className="mb-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas, distinctio sed et porro incidunt, temporibus
                  explicabo commodi quaerat repudiandae necessitatibus odio
                  rerum.
                </p>
                <p className="mb-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore ut incidunt ipsam iste dolorum quam odit! Debitis
                  incidunt minima voluptate doloribus voluptatibus.
                </p>
              </div>
              <div className="col-lg-8 ">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <h4 className="mb-2"> 01. Visit Feedback</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores, incidunt ducimus eveniet voluptatum minima neque
                      aliquam ipsam illo debitis maxime dolorem consectetur!
                    </p>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <h4 className="mb-2"> 02. Employer Services</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores, incidunt ducimus eveniet voluptatum minima neque
                      aliquam ipsam illo debitis maxime dolorem consectetur!
                    </p>
                  </div>
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <h4 className="mb-2 text-brand"> 03. Billing Inquiries </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores, incidunt ducimus eveniet voluptatum minima neque
                      aliquam ipsam illo debitis maxime dolorem consectetur!
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="mb-2"> 04. General Inquiries</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores, incidunt ducimus eveniet voluptatum minima neque
                      aliquam ipsam illo debitis maxime dolorem consectetur!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="mb-2">
              <div className="row mb-3">
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="mb-4 text-brand">Office</h4>
                  "205 North Michigan Avenue, Suite 810"
                  <br />
                  "Chicago, 60601, USA"
                  <br />
                  <abbr title="Phone">Phone: </abbr>
                  "(123) 456-7890"
                  <br />
                  <abbr title="Email">Email: </abbr>
                  "contact@BanglaCommerce.com"
                  <br />
                  <a
                    href="#www.facebook.com"
                    className="btn btn-sm font-weight-bold text-white border-radius-5 mt-3 btn-shadow-brand hover-up"
                  >
                    <i className="fi-rs-marker mr-2"></i>
                    "View map"
                  </a>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="mb-4 text-brand">Shop</h4>
                  "205 North Michigan Avenue, Suite 810"
                  <br />
                  "Chicago, 60601, USA"
                  <br />
                  <abbr title="Phone">Phone: </abbr>
                  "(123) 456-7890"
                  <br />
                  <abbr title="Email">Email: </abbr>
                  "contact@BanglaCommerce.com"
                  <br />
                  <a
                    href="#www.facebook.com"
                    className="btn btn-sm font-weight-bold text-white border-radius-5 mt-3 btn-shadow-brand hover-up"
                  >
                    <i className="fi-rs-marker mr-2"></i>
                    "View map"
                  </a>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="mb-4 text-brand">Studio</h4>
                  "205 North Michigan Avenue, Suite 810"
                  <br />
                  "Chicago, 60601, USA"
                  <br />
                  <abbr title="Phone">Phone: </abbr>
                  "(123) 456-7890"
                  <br />
                  <abbr title="Email">Email: </abbr>
                  "contact@BanglaCommerce.com"
                  <br />
                  <a
                    href="#www.facebook.com"
                    className="btn btn-sm font-weight-bold text-white border-radius-5 mt-3 btn-shadow-brand hover-up"
                  >
                    <i className="fi-rs-marker mr-2"></i>
                    "View map"
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-8">
                  <div className="contact-form-area padding-20-row-col ">
                    <h4 className="text-brand mt-5 mb-10">Contact form</h4>
                    <h2 className="mb-10">Drop Us a Line</h2>
                    <p className="text-muted mb-30 font-sm">
                      Your email address will not published. Required fields are
                      marked *
                    </p>
                    <form action="#" className="mt-30 contact-form-style">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="name"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="email"
                              type="email"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="telephone"
                              type="tel"
                              placeholder="Your Phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="subject"
                              type="text"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="textarea-style mb-5">
                            <textarea
                              name="message"
                              placeholder="Message"
                            ></textarea>
                            <button
                              className="submit submit-auto-width mt-4 "
                              type="submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 pl-50 d-lg-block d-none contact">
                  <img
                    className="border-radius-15 mt-50"
                    src={contact2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
