import React from "react";

export default function Profile({ about, experience, jobTitle, title }) {
  return (
    <div>
      <div className="profile">
        <h1>{title}</h1>
        <h2>{jobTitle}</h2>
      </div>
      <div className="about-section">
        <p>{about}</p>
        <p>{experience}</p>
      </div>
    </div>
  );
}
