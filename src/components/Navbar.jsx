import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className=" fixed w-full z-10 bg-secondary text-white py-4">
      {/* desktop navigation section  */}
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <GiSteeringWheel size={35} className=" text-primary" />
          <Link to="/" className=" font-bold text-2xl">
            CycleHub
          </Link>
        </div>

        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </Link>
          <Link
            to="/cars"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Products
          </Link>
          <Link
            to="/services"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Services
          </Link>
          <Link
            to="/revieww"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Reviews
          </Link>

        
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* responsive section  */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link
          to="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </Link>
        <Link
          to="/cars"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Products
        </Link>
        <Link
          to="/services"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Services
        </Link>

        <Link
            to="/revieww"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Reviews
          </Link>
      </div>
    </header>
  );
};

export default Navbar;
