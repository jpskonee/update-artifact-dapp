import React from "react";

function CircleImg({ img, name, title, color1, color2 }) {
  return (
    <div className="team-card">
      <img className="team-img" src={`${img}`} alt="pics" />
      <div
        style={{
          background: `linear-gradient(110deg, ${color1} 40%, ${color2})`,
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{name}</div>
      </div>
      <div className="team-title" style={{ textAlign: "center" }}>
        {title}
      </div>
    </div>
  );
}

export default CircleImg;
