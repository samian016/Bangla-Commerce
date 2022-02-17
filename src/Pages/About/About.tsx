import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row main-about">
        <div className="col-md-6 about-img">
          <img
            className="img-fluid"
            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h2 className="my-5">Welcome to Nest</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>

          <p>
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
