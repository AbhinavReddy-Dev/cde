import React, { useEffect, useState } from "react";

const SDGInfo = ({ currentGoal, setCurrentGoal }) => {
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [hideInfoStyle, setHideInfoStyle] = useState("hidden");
  useEffect(() => {
    if (currentGoal) {
      setCurrentAnimation((a) => "animate-slide-to-top");
      setHideInfoStyle((h) => "");
      document.body.style.overflow = "hidden";
    }
  }, [currentGoal]);

  const handleCloseGoalInfo = () => {
    setCurrentAnimation((a) => "animate-slide-to-bottom ");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setCurrentGoal((g) => null);
      setHideInfoStyle((h) => "hidden");
    }, 500);
  };
  return (
    <div
      className={
        " overflow-y-scroll lg:animate-none w-screen lg:w-auto h-[100vh] lg:h-[100%] left-0 top-0 fixed lg:relative lg:flex col-span-4 bg-white border border-green-400" +
        " " +
        currentAnimation +
        " " +
        hideInfoStyle
      }>
      {currentGoal ? (
        <aside className="flex flex-col w-full h-full">
          <div
            className={
              "flex px-3 py-2 justify-between items-center w-full h-fit sticky top-0"
            }>
            <h3> S D Goal Info {currentGoal}</h3>
            <button
              onClick={handleCloseGoalInfo}
              className="block lg:hidden p-2 px-4 rounded-full border border-gray-200 bg-gray-600 text-white">
              X
            </button>
          </div>
          <article className=" z-50 h-full w-full overflow-y-scroll border border-red-400"></article>
        </aside>
      ) : (
        <p className="m-auto text-center">Please select an S D Goal</p>
      )}
    </div>
  );
};

export default SDGInfo;
