import React from "react";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoPlaySpeed: 3000,
        arrows: false
    };

    const slides = [
        {
            image: '/assets/images/carousel-1.png',
            caption: 'Reliable Electrical Services',
        },
        {
            image: '/assets/images/carousel-2.jpg',
            caption: 'Reliable Electrical Services',
        },
        {
            image: '/assets/images/carousel-3.jpeg',
            caption: 'Reliable Electrical Services',
        },
        {
            image: '/assets/images/carousel-4.jpeg',
            caption: 'Reliable Electrical Services',
        }
    ];

    return (
        <div className="bg-gray-100 py-10" data-carousel="slide">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <img
                            src={slide.image}
                            alt={slide.caption}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
                            <h2 className="text-white text-2xl font-bold">{slide.caption}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;