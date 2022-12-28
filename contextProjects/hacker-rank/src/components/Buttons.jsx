import React from "react";
import { useAppContext } from "../context/context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useAppContext();

  // useEffect(() => {
  //   if (isLoading) return;
  //   setFollowers(data[page]);
  // }, [data, loading, page]);
  // const handlePage = (index) => {
  //   setPage(index);
  // };

  // const handlePrev = () => {
  //   setPage((oldPage) => {
  //     let prevPage = oldPage - 1;
  //     if (prevPage < 0) {
  //       prevPage = data.length - 1;
  //     }
  //     return prevPage;
  //   });
  // };
  // const handleNext = () => {
  //   setPage((oldPage) => {
  //     let nextPage = oldPage + 1;
  //     if (nextPage > data.length - 1) {
  //       nextPage = 0;
  //     }
  //     return nextPage;
  //   });
  // };
  return (
    <div>
      <div className="btn-container">
        <button className="prev-btn" onClick={() => handlePage("dec")}>
          prev
        </button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button className="next-btn" onClick={() => handlePage("inc")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Buttons;
