import React from "react";

const SDGoalCard = ({ goal, setCurrentGoal }) => {
  return (
    <button
      onClick={() => setCurrentGoal((g) => goal)}
      className=" h-auto min-h-[150px] w-full rounded-lg p-2 border border-violet-400 md:hover:scale-105 transition-all">
      <p className=" text-lg text-gray-600 font-bold"> {goal} </p>
    </button>
  );
};

export default SDGoalCard;
