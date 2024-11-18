import React from "react";
import CarsCard from "./CarsCard";

const OurCars = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/cruiser.png",
      name: "Crusier Bike",
      price: "2500",
    },
    {
      id: 1,
      img: "/src/assets/img/fatbike.jpg",
      name: "Fat Bike",
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
      img: "/src/assets/img/recumbent.jpg",
      name: "Recumbent",
      price: "4500",
    },
    {
      id: 4,
      img: "/src/assets/img/roadbike.jpg",
      name: "Road Bike",
      price: "1800",
    },
    {
      id: 5,
      img: "/src/assets/img/singlegear.jpg",
      name: "Single Gear Bike",
      price: "2800",
    },
  ];

  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          Our <span className=" text-primary">Products</span>
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {carsData.map((item) => {
          return (
            <div>
              <CarsCard
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCars;
