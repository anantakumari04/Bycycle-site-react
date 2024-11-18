import React from "react";
import img from "../../assets/img/own2.jpg";

const Approch = () => {
  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Approch</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          Empower individuals to be happy.
        </h2>
        
        <p className=" text-sm lg:text-base">
        As a owner I must say this that at Cycle Hub, we’re not just selling bicycles; we’re building memories and journeys! Whether it’s your child’s first ride, a thrilling mountain adventure, or a daily commute, we’re here to ensure you have the perfect bike for every occasion, paired with unmatched service and support.
        </p>
      </div>

      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Approch;
