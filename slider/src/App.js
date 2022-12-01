import React, { useState, useEffect } from "react";
import "./App.css";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  // autoplay
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="App">
      <header className="App-header">
        <p>reviews</p>
        <div className="section">
          {people.map((person, personIndex) => {
            const { id, name, title } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article key={id} className={position}>
                <h4>{name}</h4>
                <p>{title}</p>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            {FiArrowLeftCircle}
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            {FiArrowRightCircle}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
