import React from "react";
import "./footer.styles.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Nishan Agarwal &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
