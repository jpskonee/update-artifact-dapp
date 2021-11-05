import React from "react";

const DoubleHeader = ({ text, color, align, slogan, colorS, colorH }) => {
  return (
    <div>
      <div style={{ color: colorS, textAlign: align }} className="head-slogan">
        {slogan}
      </div>
      <div style={{ color: colorH, textAlign: align }} className="head-text">
        {text}
      </div>
    </div>
  );
};

export default DoubleHeader;
