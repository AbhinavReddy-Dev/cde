import React from "react";
import SDGoalCard from "./SDGoalCard";

const SDGoals = ({ setCurrentGoal }) => {
  return (
    <div className=" flex flex-wrap gap-2 md:col-span-6 border border-blue-400 sm:grid sm:grid-rows-5 sm:grid-cols-3 md:grid-rows-5 md:grid-cols-4 w-full">
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
