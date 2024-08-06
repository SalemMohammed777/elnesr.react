import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="myfooter">
      <footer className="salem">
        Designed and developed by{" "}
        <a
          title="Facebook"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100073523372306&mibextid=ZbWKwL"
        >
          {" "}
          Salem Mohammed Eljouni{" "}
        </a>{" "}
        / <a title="Whatsapp">01222346288</a>
        <span>😉</span>
      </footer>
    </div>
  );
};

export default Footer;
