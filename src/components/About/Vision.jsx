import React from "react";
import img from "../../assets/img/child.jpg";

const Vision = () => {
  return (
    <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>

      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Vision</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        
        <p className=" text-sm lg:text-base">
        Our vision  is to inspire a healthier, greener, and more connected world—one bicycle at a time. We aim to be a trusted partner in every rider’s journey, fostering a love for cycling through quality products, exceptional service, and a commitment to sustainable mobility.
        </p>
      </div>
    </div>
  );
};

export default Vision;
