import React from "react";
import { useAppContext } from "../context/context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useAppContext();
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} {""}
            </p>
            <div>
              <a href={url} className="read-link" target="_blank">
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Stories;
