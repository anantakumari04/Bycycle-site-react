import React from "react";
import WhyUsCard from "./WhyUsCard";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";

const WhyUs = () => {
  const icon1 = <SiWebmoney className="text-green-500 mx-auto" size={48} />;
  const icon2 = <FaUsers className="text-green-500 mx-auto" size={48} />;
  const icon3 = <FaShippingFast className="text-green-500 mx-auto" size={48} />;

  return (
    <div className="flex flex-col justify-center container md:mt-16 py-10">
      <h1 className="font-bold text-4xl text-center">
        Why choose <span className="text-primary">Cycle Hub</span>?
      </h1>

      <p className="text-center">
        Choose Cycle Hub because we’re more than just a bike shop—we’re your cycling partner
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <WhyUsCard
          icon={icon1}
          title="Financing Options"
          description="At Cycle Hub, we make cycling accessible with flexible financing options, so you can ride your dream bike today and pay at your own pace!"
        />
        <WhyUsCard
          icon={icon2}
          title="Satisfied Customers"
          description="At Cycle Hub, our satisfied customers are our greatest asset! We take pride in providing top-notch bikes and exceptional service, ensuring every rider leaves with a smile and the perfect ride."
        />
        <WhyUsCard
          icon={icon3}
          title="Fast & Easy Booking"
          description="With our quick and simple booking process, reserving your bike and services at Cycle Hub is hassle-free and efficient, saving you time and energy!"
        />
      </div>
    </div>
  );
};

export default WhyUs;
