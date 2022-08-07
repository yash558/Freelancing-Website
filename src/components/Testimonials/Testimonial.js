import React from 'react'
import './Testimonial.scss'
import umeshsir from '../../assets/umeshsir.jpg'
import rajesh from '../../assets/rajesh.jpg'
import sakshi from '../../assets/sakshi.jpg'
import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="testimonials my-5">
            <h1 className="text-center"> Testimonials</h1>

            <div className="d-flex flex-row">
                <hr className="line" />
                <div className="container1 mx-4 rounded-circle">
                </div>
                <hr className="line2" />
            </div>
            <div className="container">
                <Slider {...settings}>
                    <div className="slide-col">
                        <div className="user-text bg-success text-bg-dark">
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos perferendis vel!</p>
                            <h3>Umeesh Jangra</h3>
                            <p>Zara Inc.</p>
                        </div>
                        <div className="user-img">
                            <img src={umeshsir} alt="" height={200} width={200} />
                        </div>
                    </div>
                    <div className="slide-col ">
                        <div className="user-text bg-warning text-bg-dark">
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos p! Earum repudiandae, modi sunt facilis mollitia iste voluptatem, sequi temporibus eaque quod dolor!</p>
                            <h3>Rajesh Jangra</h3>
                            <p>Zara Inc.</p>
                        </div>
                        <div className="user-img">
                            <img src={rajesh} alt="" height={200} width={200} />
                        </div>
                    </div>
                    <div className="slide-col">
                        <div className="user-text bg-danger text-bg-dark">
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos perferendis vel!</p>
                            <h3>Sakshi</h3>
                            <p>Zara Inc.</p>
                        </div>
                        <div className="user-img">
                            <img src={sakshi} alt="" height={200} width={200} />
                        </div>
                    </div>
                    <div className="slide-col">
                        <div className="user-text bg-gradient text-white">
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos perferendis vel!</p>
                            <h3>Umeesh Jangra</h3>
                            <p>Zara Inc.</p>
                        </div>
                        <div className="user-img">
                            <img src={umeshsir} alt="" height={200} width={200} />
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
}

export default Testimonial