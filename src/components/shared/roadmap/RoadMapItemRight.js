import React from "react";

function RoadMapItemRight({ date, header, body }) {
  return (
    <div className="roadmap-item-root-r">
      <div className="line"></div>
      <div className="card">
        <div className="date">{date}</div>
        <div className="header">{header}</div>
        <div className="body">{body}</div>
      </div>
    </div>
  );
}

export default RoadMapItemRight;
