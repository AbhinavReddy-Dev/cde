import React from "react";

const Navigation = () => {
  return (
    <nav className=" border flex flex-col border-red-400 gap-2 px-2 md:px-4 w-full mb-6 sticky top-0 bg-white">
      <div className="flex justify-between py-2 text-blue-700 border-b border-gray-400">
        <p>Logo</p> <p>SDG Logo</p>
      </div>
      <ul className=" flex justify-between w-full text-sm pb-2 text-gray-600">
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
