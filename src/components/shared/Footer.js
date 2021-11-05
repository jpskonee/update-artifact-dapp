import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div
        className="footer-link"
        style={{
          background: "red",
          padding: "0.5rem 1rem",
          marginTop: "0.6rem",
          borderRadius: "10px",
        }}
      >
        {" "}
        Contact
      </div>
      <div className="footer-link">©Artifactnft.io</div>
      <div className="footer-link" style={{ marginTop: "0.6rem" }}>
        {" "}
        T & C
      </div>
    </div>
  );
}

export default Footer;
