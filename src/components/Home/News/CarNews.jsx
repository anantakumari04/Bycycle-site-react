import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarNewsCard from "./CarNewsCard";

const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: "/src/assets/img/store.png",
      desc: "",
    },
    {
      id: 1,
      img: "/src/assets/img/cycle1.png",
      desc: "",
    },
    {
      id: 2,
      img: "/src/assets/img/cycle2.png",
      desc: "",
    },
    {
      id: 3,
      img: "/src/assets/img/cycle3.png",
      desc: "",
    },
    {
      id: 4,
      img: "/src/assets/img/cycle4.png",
      desc: "",
    },
    {
      id: 5,
      img: "/src/assets/img/cycle5.png",
      desc: "",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className=" container mt-14">
      <h1 className=" font-bold text-4xl text-center">
        Our Store and<span className=" text-primary"> happy customers</span>
      </h1>

      <p className=" text-center">
      At Cycle Hub, we take pride in delivering top-quality bikes and exceptional service, ensuring every customer rides away happy and satisfied
      </p>

      <div className=" mt-8">
        <Slider {...settings}>
          {newsData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;
