import React from "react";

const SDGoalCard = ({ goal, currentGoal, setCurrentGoal }) => {
  return (
    <button
      onClick={() => setCurrentGoal((g) => goal)}
      className={
        " h-fit w-full md:hover:scale-105 transition-all " +
        (currentGoal?.id === goal.id
          ? "border-4 border-dashed border-gray-400 shadow-lg rounded-xl"
          : " ")
      }>
      <img
        src={`/SDGIcons/${goal.id}.png`}
        alt={`${goal.name}`}
        className="cover w-full h-auto z-10 rounded-lg text-gray-400"
      />
    </button>
  );
};

export default SDGoalCard;
