import React from "react";

import "./Catagory.css";
import icon1 from "../../asset/Icon/icon-1.svg";
import icon2 from "../../asset/Icon/icon-2.svg";
import icon3 from "../../asset/Icon/icon-3.svg";
import icon4 from "../../asset/Icon/icon-4.svg";
import icon5 from "../../asset/Icon/icon-5.svg";

const Category = () => {
  return (
    <div className="featured section-padding">
      <div className="main-body">
        <div className="row">
          <div className="col-md-3">
            <div className="banner-left-icon d-flex align-items-center">
              <div className="banner-icon">
                <img src={icon1} alt="" />
              </div>
              <div className="Catbanner-text">
                <h3 className="icon-box-title">Best prices & offers</h3>
                <p>Orders $50 or more</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="banner-left-icon d-flex align-items-center">
              <div className="banner-icon">
                <img src={icon2} alt="" />
              </div>
              <div className="Catbanner-text">
                <h3 className="icon-box-title">Free delivery</h3>
                <p>24/7 services</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="banner-left-icon d-flex align-items-center">
              <div className="banner-icon">
                <img src={icon3} alt="" />
              </div>
              <div className="Catbanner-text">
                <h3 className="icon-box-title">Great daily deal</h3>
                <p>When you sign up</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="banner-left-icon d-flex align-items-center">
              <div className="banner-icon">
                <img src={icon4} alt="" />
              </div>
              <div className="Catbanner-text">
                <h3 className="icon-box-title">Wide assortment</h3>
                <p>Mega Discounts</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 ">
            <div className="banner-left-icon d-flex align-items-center">
              <div className="banner-icon">
                <img src={icon5} alt="" />
              </div>
              <div className="banner-text">
                <h3 className="icon-box-title">Easy returns</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
