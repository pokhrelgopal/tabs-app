import React, { useEffect, useState } from "react";
import Loader from "./loader";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJbos = await response.json();
    setJobs(newJbos);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="container mx-auto">
      <section className="px-2">
        <div className="title flex items-center justify-center font-normal">
          <h2 className="text-3xl underline underline-offset-8 py-8">
            Experience
          </h2>
        </div>
        <div className="jobs flex space-x-10 md:space-x-20">
          {/* button-container */}
          <div className="buttons flex flex-col space-y-5 h-1/3">
            {jobs.map((item, index) => {
              return (
                <button
                  onClick={() => setValue(index)}
                  key={index}
                  className="button
                  bg-teal-400
                  px-2
                  py-1
                  text-white
                  py-8
                  w-20
                  rounded"
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          {/* job-info */}
          <article className="job--info flex flex-col space-y-2">
            <h3 className="text-xl font-semibold">{company}</h3>
            <h3 className="text-md">{title}</h3>
            <p className="text-stone-400">{dates}</p>
            <p className="tasks">
              {duties.map((duty, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="job--desc flex space-x-8 space-y-3 items-center"
                    >
                      <i className="fa fa-check-double text-teal-400"></i>
                      <p>{duty}</p>
                    </div>
                  </>
                );
              })}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
