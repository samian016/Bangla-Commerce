import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import './About.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
    const [slider, setSlider] = useState<Array<any>>([]);
    const [offers, setOffers] = useState<Array<any>>([]);
    useEffect(() => {
        fetch('homeSlider.json')
            .then(res => res.json())
            .then(data => setSlider(data))
    }, [])
    useEffect(() => {
        fetch('whatWeProvide.json')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className="container my-5">
            <div className="row main-about">
                <div className="col-md-6 about-img">
                    <img className="img-fluid" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="my-5">Welcome to Nest</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>

                    <p className="mb-5">Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        modules={[Controller, Autoplay]}
                        pagination={{ clickable: true }}
                    >
                        {
                            slider.map(slide => (
                                <SwiperSlide key={slide.id} className="slide">
                                    <div className="row row-cols-1 row-cols-md g-2 slide-content">
                                        <div className="col">
                                            <div className="card h-100 image-container">
                                                <img src={slide.img} className="card-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
            <div className="my-5 text-center title style-3">
                <h2>What We Provide?</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 d-flex my-5">
                {
                    offers.map(offer => <div key={offer.id} className="col mb-4">
                        <div className="card h-100 text-center">
                            <img src={offer.icon} className="img-fluid w-25 mt-5 mx-auto card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{offer.title}</h5>
                                <p className="card-text">{offer.description}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default About;