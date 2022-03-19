import React from 'react';
import Sponsor from '../Sponsor/Sponsor';
import "./Promotions.css";

const Promotions = () => {
    return (
        <div>
            <h1>This is promotion page</h1>
            <h1>here is we use billboard for promotion</h1>

            {/* <!-- Letest Demo Video --> */}

            <section>
                <div className="container text-center my-5">
                    <h1 className=" fw-bold text-center">Letest<span> Demo </span>Video</h1>
                    <h4><span>Watch Now</span></h4>
                    <div className="container p-4">
                        <div className="row gx-5">
                            <div className="col-lg-6 p-3">
                                <div className="videoWrapper">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SbKl7L0LavI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 p-3">
                                <div className="videoWrapper">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Xa_PrgA0s50" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- Letest Demo Video End --> */}



            <Sponsor></Sponsor>


        </div>
    );
};

export default Promotions;