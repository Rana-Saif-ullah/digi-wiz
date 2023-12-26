import React from "react";
import './footer.css'
function Footer() {
  return (
    <div className="footer__sections section">
      <div className="footer__section">
        <div className="footer__content">
          <img src="assets/images/logo.png" alt="Footer Logo" />
          <p className="paragraph">
            We have the best creative team that bring your ideas to life.We have
            the best creative team that bring your
          </p>
        </div>
        <div className="footer__links">
          <span className="sub__title">Direct Links</span>
          <div className="links">
            <a href="#" className="link">
              Home
            </a>
            <a href="#" className="link">
              About Us
            </a>
            <a href="#" className="link">
              Services
            </a>
            <a href="#" className="link">
              Portfolio
            </a>
          </div>
        </div>
        <div className="social__link">
          <span className="sub__title">Social Links</span>
          <div className="links">
            <a
              target="_blank"
              href="https://www.instagram.com/digiwizzcorp?igshid=OGQ5ZDc2ODk2ZA=="
              className="ri-instagram-fill"
            />
            <a
              target="_blank"
              href="https://www.linkedin.com/company/digiwizzcorp/"
              className="ri-linkedin-fill"
            />
          </div>
        </div>
        <div className="social__link">
          <span className="sub__title">Newsletter</span>
          <input
            type="email"
            style={{
              display: "flex",
              padding: "14px 16px",
              alignItems: "center",
              alignSelf: "stretch",
              borderRadius: 8,
              border: "2px solid var(--primary-color)",
              backgroundColor: "transparent",
              color: "var(--primary-color)",
              fontFamily: "Manrope",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "0.5px",
              outline: 0,
            }}
            className="input"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
      <div className="footer__copy">
        <p className="paragraph">All right reserved by Digi Wizz Crop</p>
        <div className="email">
          <span className="sub__title">Work Inquires</span>
          <p className="paragraph">Digiwizinfoemail@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
