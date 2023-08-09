import React, { useEffect, useState } from "react";
import projects from "../data/projects";
const SDGInfoCards = ({ currentGoal }) => {
  const { id } = currentGoal;
  const [projectsInfo, setProjectsInfo] = useState(null);
  const [projectsInfoLoading, setProjectsInfoLoading] = useState(true);

  const fetchProjectsInfo = async () => {
    var projects_info = projects.filter((p) => p.sdg_goals.includes(id));
    setTimeout(() => {
      setProjectsInfo(() => projects_info);
      setProjectsInfoLoading((l) => false);
    }, 50);
  };

  useEffect(() => {
    fetchProjectsInfo();
  }, [currentGoal]);

  if (projectsInfoLoading && !projectsInfo) {
    return (
      <p className="py-2 text-gray-500 m-auto font-light text-sm">Loading...</p>
    );
  }
  return (
    <div>
      {projectsInfo && projectsInfo.length > 0 && !projectsInfoLoading ? (
        <>
          {projectsInfo.map((p) => (
            <div
              key={p.id}
              className=" mt-2 text-gray-500 border-b py-3 border-gray-200">
              <h3 className="text-gray-600 font-bold text-md md:text-lg">
                {p.project_name}
              </h3>

              <div className=" flex flex-wrap gap-2 my-2 font-normal text-xs md:text-sm items-center">
                <p className="font-medium text-xs md:text-sm">
                  <span className=" text-teal-700 font-semibold">
                    {p.people_trained.count} {p.people_trained.profession}
                  </span>
                </p>
                <p> trained in </p>
                {p.trained_in.map((t) => (
                  <p
                    key={t}
                    className=" h-fit text-teal-800 px-2 py-1 bg-teal-50 border border-teal-100 rounded-md text-xs font-medium">
                    {t}
                  </p>
                ))}
              </div>
              <div className=" text-sm text-gray-600 font-semibold mt-4">
                <p>Locations</p>
                <div className=" flex flex-wrap gap-2 mt-1 text-indigo-600">
                  {p.locations.map((l) => (
                    <span
                      key={l}
                      className="text-xs font-medium border border-indigo-100 rounded-md px-2 py-1 bg-indigo-50">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div className=" text-sm text-gray-600 font-semibold mt-4">
                <p>Departments</p>
                <div className=" flex flex-wrap gap-2 mt-1 text-gray-700">
                  {p.departments.map((d) => (
                    <span
                      key={d}
                      className="text-xs font-medium border border-gray-100 rounded-md px-2 py-1 bg-gray-50">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div className=" text-sm text-gray-600 font-semibold mt-4">
                <p>Achievements</p>
                <div className=" flex flex-wrap gap-2 mt-1 text-violet-600">
                  {p.achievements.map((a) => (
                    <span
                      key={a}
                      className="text-xs font-medium border border-violet-100 rounded-md px-2 py-1 bg-violet-50">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button className=" w-full my-4 py-2 bg-blue-100 font-medium rounded-lg text-sm text-blue-900 ">
            Read More
          </button>
        </>
      ) : projectsInfo && projectsInfo.length === 0 && !projectsInfoLoading ? (
        <p className="text-gray-500 m-auto font-light text-sm">
          No projects found for this SDG.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SDGInfoCards;
