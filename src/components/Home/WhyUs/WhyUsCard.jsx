import React from "react";

const WhyUsCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className="text-primary text-3xl font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default WhyUsCard;
