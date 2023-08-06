import React from "react";

const Navigation = () => {
  return (
    <nav className="z-40 flex flex-col gap-2 px-2 py-3 md:px-5 w-full mx-auto lg:mb-6 sticky top-0  border-2 border-t-0 border-gray-200 bg-white lg:rounded-b-lg">
      <div className="flex justify-between py-2 text-blue-700 border-b border-gray-200">
        <p>Logo</p>
        <img
          src="/SDGlogoAndSDGWheel/colorWEB/horizontal.png"
          alt="SDG logo"
          className="h-8"
        />
      </div>
      <ul className=" flex justify-between w-full text-sm py-2 text-gray-600">
        <li>SDGs</li>
        <li>About Us</li>
        <li>Our Work</li>
        <li>Resources</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
