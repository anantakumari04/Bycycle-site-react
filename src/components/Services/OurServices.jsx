import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServiceCards from "./ServiceCards";

const OurServices = () => {
  const icon1 = <GiCarWheel className="text-green-500 mx-auto" size={48} />;
  const icon2 = <SiGoogleearthengine className="text-green-500 mx-auto" size={48} />;
  const icon3 = <MdDesignServices className="text-green-500 mx-auto" size={48} />;
  const icon4 = <IoSettings className="text-green-500 mx-auto" size={48} />;
  const icon5 = <FaCar className="text-green-500 mx-auto" size={48} />;
  const icon6 = <SiCoronaengine className="text-green-500 mx-auto" size={48} />;

  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Services</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <ServiceCards
          icon={icon1}
          title="Tires & Wheels"
          description="Keep your ride smooth and safe with our top-notch tire and wheel services, ensuring perfect balance and durability for every journey."
        />
        <ServiceCards
          icon={icon2}
          title="Exhaust System"
          description="Enhance your vehicle's performance and efficiency with our comprehensive exhaust system repairs and upgrades."
        />
        <ServiceCards
          icon={icon3}
          title="Cars Maintenance"
          description="Stay worry-free with our regular car maintenance services, designed to keep your vehicle in peak condition."
        />
        <ServiceCards
          icon={icon4}
          title="Brake Repairs"
          description="Ensure your safety on the road with our expert brake inspection and repair services."
        />
        <ServiceCards
          icon={icon5}
          title="Body Service"
          description="Restore your car's appearance and structure with our premium body repair and detailing services."
        />
        <ServiceCards
          icon={icon6}
          title="Engine Services"
          description="Boost your vehicle's performance with our reliable and efficient engine repair and optimization solutions."
        />
      </div>
    </div>
  );
};

export default OurServices;
