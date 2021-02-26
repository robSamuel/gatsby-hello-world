import React from "react";
import Header from "../components/header";

export default function About() {
  return (
    <div className="container-page">
        <Header headerText="About Gatsby" />
        <h1>About me</h1>
        <p>
          I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
    </div>
  );
};