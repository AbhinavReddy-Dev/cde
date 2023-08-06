import React from "react";
import SDGoalCard from "./SDGoalCard";

const SDGoals = ({ setCurrentGoal }) => {
  return (
    <div className=" grid-cols-3 gap-3 md:col-span-6 grid sm:grid-rows-6 sm:grid-cols-4 md:grid-rows-4 md:grid-cols-5 w-full">
      {
        // 17 sdgoal cards
        [...Array(17).keys()].map((goal) => (
          <SDGoalCard
            key={goal}
            goal={goal + 1}
            setCurrentGoal={setCurrentGoal}
          />
        ))
      }
    </div>
  );
};

export default SDGoals;
