import React from "react";

export const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <div className="card">
      <img src={avatar_url} />
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        view all profile
      </a>
    </div>
  );
};
