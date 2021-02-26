import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export default function Header(props) {
  const navigationsStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around'
  };

  return (
      <header>
          <div style={navigationsStyle}>
          <Link to="/">Home</Link>
              <Link to="/contact/">Contact</Link>
              <Link to="/about/">About</Link>
          </div>
          <h1>{props.headerText}</h1>
      </header>
  );
};

Header.prototype = {
    headerText: PropTypes.string
}