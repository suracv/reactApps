import { useEffect, useState } from "react";
import "./App.css";
import { Follower } from "./Follower";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [data, loading, page]);
  const handlePage = (index) => {
    setPage(index);
  };

  const handlePrev = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  const handleNext = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  return (
    <div className="App">
      <h1>{loading ? "loading..." : "pagination"}</h1>
      <div className="followers">
        <div className="container">
          {followers.map((follower) => {
            return (
              <Follower key={follower.id} {...follower} className="card" />
            );
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <div className="prev-btn" onClick={handlePrev}>
              prev
            </div>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`btn ${index === page ? "activebtn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <div className="next-btn" onClick={handleNext}>
              next
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
