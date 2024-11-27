import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";

const CardSlider = () => {
  const [activeArrow, setActiveArrow] = useState("");

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow custom-prev"
        onClick={() => {
          setActiveArrow("prev");
          onClick();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20}>
          <path
            fill={activeArrow === "prev" ? "#007bff" : "grey"}
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow custom-next"
        onClick={() => {
          setActiveArrow("next");
          onClick();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20}>
          <path
            fill={activeArrow === "next" ? "#007bff" : "grey"}
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          />
        </svg>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Nicole Champlin",
      image: "/lady2.jpg",
      review: "Couldn't agree more to this product!",
      rating: 5,
      platformLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 2,
      name: "John Doe",
      image: "/lady2.jpg",
      review: "Amazing product, exceeded my expectations!",
      rating: 5,
      platformLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 3,
      name: "Jane Smith",
      image: "/lady2.jpg",
      review: "Great value for money!",
      rating: 4,
      platformLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 4,
      name: "Robert Brown",
      image: "/lady2.jpg",
      review: "Simply the best!",
      rating: 5,
      platformLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
  ];

  return (
    <div className="card-slider">
      <h2 className="slider-heading">What people are saying about us?</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <div>
                <div className="testimonial-rating">
                  {"⭐".repeat(testimonial.rating)}
                </div>
                <h3>{testimonial.name}</h3>
              </div>
            </div>
            <p className="testimonial-review">"{testimonial.review}"</p>
            <div className="testimonial-platform">
              <img
                src={testimonial.platformLogo}
                alt="Google Logo"
                className="platform-logo"
                style={{ width: 60, height: 25 }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
