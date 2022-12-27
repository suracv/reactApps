import React, { useEffect, useState } from "react";

import "./App.css";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  });
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <h2>experience</h2>
      <div className="jobsCenter">
        <article className="jobInfo">
          <div>
            {jobs.map((item, index) => {
              return (
                <button key={item.id} onClick={() => setValue(index)}
                className={`jobBtn ${index === value && 'activeBtn' }`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="jobDate">{dates}</p>
          {
            (duties.map = (duty, index) => {
              return (
                <div key={index} className="jobDesc">
                  <p>{duty}</p>
                </div>
              );
            })
          }
        </article>
      </div>
    </section>
  );
}

export default App;
