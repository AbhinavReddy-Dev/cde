import React, { useState } from "react";
import SDGoals from "./SDGoals";
import SDGInfo from "./SDGInfo";

const SDGLayout = () => {
  const [currentGoal, setCurrentGoal] = useState(null);
  return (
    <>
      <p className=" mt-5 md:mt-10 font-bold text-xl sm:text-2xl md:text-4xl text-gray-700">
        Sustainable Development Goals
      </p>
      <div className="  lg:grid md:h-full lg:grid-cols-10 lg:gap-4 mt-3 md:mt-6 ">
        <SDGoals setCurrentGoal={setCurrentGoal} />
        <SDGInfo setCurrentGoal={setCurrentGoal} currentGoal={currentGoal} />
      </div>
    </>
  );
};

export default SDGLayout;
