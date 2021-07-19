import React, { useState, useEffect } from "react";
import "./footer.scss";

export default function Footer() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="footer-container-item">
          <h3>Our Address</h3>
          <p>
            Unit 5 Frobury Farm,
            <br /> Ecchinswell Road Kingsclere, <br />
            Reading RG20 4QQ
          </p>
        </div>
        <div className="footer-container-item">
          <h3>Working Hours</h3>
          <p>
            Monday-Friday: 9:00 - 18:00 <br /> Saturday: By Appointment
          </p>
        </div>
      </div>
    </div>
  );
}
