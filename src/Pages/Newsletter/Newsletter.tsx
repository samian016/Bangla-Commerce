import React, { useState } from "react";
import img from "../../asset/Icon/banner-9.png";
import swal from 'sweetalert';
import "./Newsletter.css";

const Newsletter: React.FC = () => {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const handleOnBlurEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    setSubscribeEmail(e.currentTarget.value);
  }
  const handleProductSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch('https://blooming-chamber-05072.herokuapp.com/newsletter', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: subscribeEmail })
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          swal("Thank You", "For Subscribing", "success");
        }
        else {
          alert('Something is wrong');
        }
      })
    e.preventDefault();
  }
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
                  <input id="emailInput" type="email" placeholder="Your email address" onBlur={handleOnBlurEmail} />
                  <button onClick={handleProductSubmit} className="button" type="submit">
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
