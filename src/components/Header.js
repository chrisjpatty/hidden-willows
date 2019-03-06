import React from "react";
import { Link } from '@reach/router'
import { Spring } from "react-spring";
import logo from "../img/logo.svg";
import Willow from '../img/willow.svg'
import Stroke from '../img/stroke.svg'

let Header = ({location: { pathname }}) => {
  return (
    <header>
      <div className="logo-wrapper">
        <img className="logo" src={logo} alt="Hidden Willows Apartments" />
      </div>
      <nav>
        <Link to="/">
          Photos
          <AnimatedIndicator isActive={pathname === "/"} />
        </Link>
        <Link to="/rates">
          Rates & Amenities
          <AnimatedIndicator isActive={pathname === "/rates"} />
        </Link>
        <Link to="/openings">
          Openings <AnimatedIndicator isActive={pathname === "/openings"} />
        </Link>
        {/* <Link to="/apply">
          Apply <AnimatedIndicator isActive={pathname === "/apply"} />
        </Link> */}
        <Link to="/contact">
          Contact <AnimatedIndicator isActive={pathname === "/contact"} />
        </Link>
        <div className="cta-wrapper">
          <a href="/application.pdf" target="_blank" rel="noopener noreferrer">Apply Today</a>
        </div>
      </nav>
      <div className="willow-stroke">
        <img className="willow" src={Willow} aria-hidden="true" />
        <img className="stroke" src={Stroke} aria-hidden="true" />
      </div>
    </header>
  );
};
export default Header;

const AnimatedIndicator = ({ isActive }) => (
  <Spring
    from={{ transform: "translateX(3vw) rotate(45deg)", opacity: 0 }}
    to={
      isActive
        ? { transform: "translateX(0px) rotate(45deg)", opacity: 1 }
        : { transform: "translateX(3vw) rotate(45deg)", opacity: 0 }
    }
  >
    {style => (
      <div className="active-indicator" style={style} />
    )}
  </Spring>
);
