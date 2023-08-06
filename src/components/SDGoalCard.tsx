import React from "react";

const SDGoalCard = ({ goal, setCurrentGoal }) => {
  return (
    <button
      onClick={() => setCurrentGoal((g) => goal)}
      className=" h-auto min-h-[100px] w-full md:hover:scale-105 transition-all">
      <img
        src={`/SDGIcons/${goal}.png`}
        alt={`S D Goal ${goal}`}
        className="cover w-full h-full rounded-lg"
      />
    </button>
  );
};

export default SDGoalCard;
