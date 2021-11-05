import React from "react";

function RoadMapItemLeft({ date, header, body }) {
  return (
    <div className="roadmap-item-root-l">
      <div className="card">
        <div className="date">{date}</div>
        <div className="header">{header}</div>
        <div className="body">{body}</div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default RoadMapItemLeft;
