import React from "react";

const Navigation = () => {
  return (
    <nav className="z-40 flex flex-col gap-2 px-2 py-3 md:px-5 w-full mx-auto lg:mb-6 sticky top-0  border-2 border-t-0 border-gray-100 bg-white lg:rounded-b-lg">
      <div className="flex justify-between items-center pt-2 pb-4 text-blue-900 border-b-2 border-gray-100">
        <div className=" flex items-center">
          <img
            src="/cde_logo.png"
            alt="CDE logo"
            title="Center for Development of Entreprenuers"
            className="h-16"
          />
          <h4 className=" hidden md:block font-bold text-x2l mx-2 uppercase">
            Center for Development of Entreprenuers
          </h4>
        </div>
        <img
          src="/SDGlogoAndSDGWheel/colorWEB/horizontal.png"
          alt="SDG logo"
          title="Sustainable Development Goals"
          className=" h-12 md:h-16"
        />
      </div>
      <ul className=" flex justify-between w-full text-sm py-2 text-gray-600 font-semibold">
        <a className=" cursor-pointer hover:font-bold transition-all"> SDGs </a>
        <a className=" cursor-pointer hover:font-bold transition-all">
          About Us
        </a>
        <a className=" cursor-pointer hover:font-bold transition-all">
          Our Work
        </a>
        <a className=" cursor-pointer hover:font-bold transition-all">
          Resources
        </a>
        <a className=" cursor-pointer hover:font-bold transition-all">
          Contact Us
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
