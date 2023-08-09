import React from "react";
import SDGoalCard from "./SDGoalCard";
import goals from "../data/SDGs";

const SDGoals = ({ currentGoal, setCurrentGoal }) => {
  return (
    <>
      <p className=" font-bold text-xl mb-3 sm:text-2xl md:text-4xl text-gray-700 col-span-full ">
        Sustainable Development Goals
      </p>
      <div className="grid grid-cols-4 gap-3 md:col-span-6 sm:grid-cols-4 sm:grid-rows-6 md:grid-cols-6 md:grid-rows-auto w-full">
        {
          // 17 sdgoal cards
          goals.map((goal) => (
            <SDGoalCard
              key={goal.id}
              goal={goal}
              currentGoal={currentGoal}
              setCurrentGoal={setCurrentGoal}
            />
          ))
        }
      </div>
    </>
  );
};

export default SDGoals;
