import React, { useState } from "react";
import SDGoals from "./SDGoals";
import SDGInfo from "./SDGInfo";

const SDGLayout = () => {
  const [currentGoal, setCurrentGoal] = useState(null);
  return (
    <div className=" lg:grid md:h-full border border-gray-400 lg:grid-cols-10 lg:gap-4">
      <SDGoals setCurrentGoal={setCurrentGoal} />
      <SDGInfo setCurrentGoal={setCurrentGoal} currentGoal={currentGoal} />
    </div>
  );
};

export default SDGLayout;
