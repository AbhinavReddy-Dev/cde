import React, { useState } from "react";
import SDGoals from "./SDGoals";
import SDGInfo from "./SDGInfo";

const SDGLayout = () => {
  const [currentGoal, setCurrentGoal] = useState();
  return (
    <div className="lg:grid md:h-min lg:max-h-[700px] w-full lg:grid-cols-10 lg:gap-4 mt-3 md:mt-6 ">
      <SDGoals setCurrentGoal={setCurrentGoal} currentGoal={currentGoal} />
      <SDGInfo setCurrentGoal={setCurrentGoal} currentGoal={currentGoal} />
    </div>
  );
};

export default SDGLayout;
