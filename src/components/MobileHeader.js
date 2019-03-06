import React from "react";
import { Link } from "@reach/router";
import Logo from "../img/logo.svg";

export default () => {
  return (
    <div className="mobile-header">
      <img src={Logo} alt="Hidden Willows Townhouses" />
      <nav>
        <div className="link-row">
          <Link to="/">Photos</Link>
          <Separator/>
          <Link to="/rates">Rates & Amenities</Link>
          <Separator/>
          <Link to="/openings">Openings</Link>
        </div>
        <div className="link-row">
          <Link to="/contact">Contact</Link>
          <Separator/>
          <a href="/application.pdf" target="_blank" rel="noopener noreferrer">
            Apply Today
          </a>
        </div>
      </nav>
    </div>
  );
};

const Separator = () => (
  <div className="separator">•</div>
)
