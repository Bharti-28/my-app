import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.component";

export const Premier = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        sliderToScroll: 2,
        InitalSlide: 0,
        responsive: [
          {
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
          },
          {
            breakpoints: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               InitialSide: 1,
            },
          },
          {
            breakpoints: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
          },
        ],
    };
    return (
        <>
          <Slider {...settings}></Slider>   
        </>
    );
};
