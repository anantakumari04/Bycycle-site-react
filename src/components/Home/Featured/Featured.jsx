import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureCard from "./FeatureCard";

const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/cruiser.png",
      name: "Cruiser Bike",
      price: "2500",
    },
    {
      id: 1,
      img: "/src/assets/img/fatbike.jpg",
      name: "Fat Bicycle",
      price: "3200",
    },
    {
      id: 2,
      img: "/src/assets/img/mount.jpg",
      name: "Mountain Bike",
      price: "5000",
    },
    {
      id: 3,
      img: "/src/assets/img/roadbike.jpg",
      name: "Road Bike",
      price: "1800",
    },
    {
      id: 4,
      img: "/src/assets/img/singlegear.jpg",
      name: "Single Gear ",
      price: "2800",
    },
    {
      id: 5,
      img: "/src/assets/img/recumbent.jpg",
      name: "Recumbent",
      price: "4500",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
        Featured <span className=" text-primary">Bicycle</span>
      </h1>

      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        laborum!
      </p>

      <div className=" mt-8">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
