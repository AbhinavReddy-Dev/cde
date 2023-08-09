import React, { useEffect, useState } from "react";
import SDGInfoCards from "./SDGInfoCards";

const SDGInfo = ({ currentGoal, setCurrentGoal }) => {
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [hideInfoStyle, setHideInfoStyle] = useState("hidden");
  useEffect(() => {
    if (currentGoal && document.body.clientWidth < 1024) {
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
        "z-50 lg:z-0  lg:animate-none p-2 w-screen lg:w-auto left-0 top-0 h-screen lg:max-h-[700px]  fixed lg:relative lg:flex col-span-4 row bg-white lg:border lg:border-gray-200 lg:rounded-lg" +
        " " +
        currentAnimation +
        " " +
        hideInfoStyle
      }>
      {currentGoal ? (
        <aside className="flex flex-col max-h-screen w-full overflow-scroll p-2 pt-0 ">
          <div
            className={
              "flex  justify-between bg-white items-center w-full pt-2 h-fit sticky top-0 left-0"
            }>
            <h3 className=" font-semibold mb-2 text-lg md:text-xl text-gray-700 uppercase">
              {currentGoal.id}. {currentGoal.name}
            </h3>
            <button
              onClick={handleCloseGoalInfo}
              className="block lg:hidden px-1 font-bold text-lg rounded-full  bg-gray-200 text-gray-700">
              ⓧ
            </button>
          </div>
          <article className=" h-full w-full overflow-scroll">
            <SDGInfoCards currentGoal={currentGoal} />
          </article>
        </aside>
      ) : (
        <p className="m-auto bg-slate-200 p-3 px-5 rounded-lg text-sm text-center text-gray-700 font-light">
          Please select an SDG.
        </p>
      )}
    </div>
  );
};

export default SDGInfo;
