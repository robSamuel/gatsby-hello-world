import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Contact() {
  return (
      <div className="container-page">
          <Header headerText="Contact" />
          <h1>I'd love to talk! Email me at the address below</h1>
          <p>Send us a message!</p>
          <p>
            <a href="mailto:me@example.com">me@example.com</a>
          </p>
      </div>
  );
};