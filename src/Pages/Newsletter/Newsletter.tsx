import React from "react";
import img from "../../asset/Icon/banner-9.png";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter-inner">
              <div className="newsletter-content">
                <h2>
                  Stay home & get your daily
                  <br />
                  needs from our shop
                </h2>
                <p>
                  Start You'r Daily Shopping with{" "}
                  <span className="text">Nest Mart</span>
                </p>
                <form className="form-subscriber d-flex">
                  <input type="email" placeholder="Your email address" />
                  <button className="button" type="submit">
                    Subscribe
                  </button>
                </form>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
