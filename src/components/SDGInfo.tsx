import React, { useEffect, useState } from "react";

const SDGInfo = ({ currentGoal, setCurrentGoal }) => {
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [hideInfo, setHideInfo] = useState("hidden");
  useEffect(() => {
    if (currentGoal) {
      setCurrentAnimation((a) => "animate-slide-to-top");
      setHideInfo((h) => "");
    }
  }, [currentGoal]);

  const handleCloseGoalInfo = () => {
    setCurrentAnimation((a) => "animate-slide-to-bottom ");
    setTimeout(() => {
      setCurrentGoal((g) => null);
      setHideInfo((h) => "hidden");
    }, 500);
  };
  return (
    <div
      className={
        " lg:animate-none w-screen lg:w-auto h-[100vh] lg:h-[80vh] left-0 bottom-0 fixed lg:relative lg:flex col-span-4 bg-white border border-green-400" +
        " " +
        currentAnimation +
        " " +
        hideInfo
      }>
      {currentGoal ? (
        <div className={"flex px-3 py-4 justify-between w-full h-fit"}>
          <h3> S D Goal Info {currentGoal}</h3>
          <button
            onClick={handleCloseGoalInfo}
            className="block lg:hidden p-2 px-4 rounded-full border border-gray-200 bg-gray-600 text-white">
            X
          </button>
        </div>
      ) : (
        <p className="m-auto text-center">Please select an S D Goal</p>
      )}
    </div>
  );
};

export default SDGInfo;
