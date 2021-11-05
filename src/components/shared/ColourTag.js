import React from "react";

function ColourTag({ text, textColor, color1, color2 }) {
  return (
    <div
      style={{
        background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
      }}
      className="colour-tag"
    >
      <div style={{ color: textColor, textAlign: "center" }}>{text}</div>
    </div>
  );
}

export default ColourTag;
