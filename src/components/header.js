import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return <h1>{props.headerText}</h1>;
};

Header.prototype = {
    headerText: PropTypes.string
}