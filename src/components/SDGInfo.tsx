import React, { useEffect, useState } from "react";

const SDGInfo = ({ currentGoal, setCurrentGoal }) => {
  const [currentAnimation, setCurrentAnimation] = useState("");
  const [hideInfoStyle, setHideInfoStyle] = useState("hidden");
  useEffect(() => {
    if (currentGoal && document.body.clientWidth < 768) {
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
        "lg:animate-none w-screen lg:w-auto h-[100vh] lg:h-[100%] left-0 lg:relative lg:flex col-span-4 bg-white border border-gray-400 lg:rounded-lg" +
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
            <h3 className=" font-medium text-gray-700">
              {" "}
              S D Goal Info {currentGoal}
            </h3>
            <button
              onClick={handleCloseGoalInfo}
              className="block lg:hidden p-1 px-2 rounded-full  bg-gray-200 text-gray-700">
              ⓧ
            </button>
          </div>
          <article className=" h-full w-full overflow-y-scroll border border-red-50"></article>
        </aside>
      ) : (
        <p className="m-auto text-center text-gray-500 font-light">
          Please select an S D Goal.
        </p>
      )}
    </div>
  );
};

export default SDGInfo;
