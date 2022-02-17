import React from "react";
import "./NotFound.css";
import notfound from "../../asset/Icon/page-404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main page-404">
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
              <p className="mb-20">
                <img src={notfound} alt="" />
              </p>
              <h1 className="display-2 mb-3">Page Not Found</h1>
              <p className="font-lg text-grey-700 mb-2">
                The link you clicked may be broken or the page may have been
                removed.
                <br />
                visit the
                <a href="www.facebook.com">
                  <span>Homepage</span>
                </a>
                "or"
                <a href="www.facebook.com">
                  <span>Contact Us</span>
                </a>
                "about the problem"
              </p>
              <div className="search-form">
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <button className="search-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <Link
                className="search-btn btn-default submit-auto-width font-xs mt-30"
                to="/"
              >
                <i className="mr-5 fa fa-home">Back To Home Page</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
