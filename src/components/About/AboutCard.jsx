import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arun Sahu </span>
            from <span className="purple"> Sagar, India.</span>
            <br />
            I am a graduate from Indian Institute of Technology Jodhpur.
            Currently I have working as a <span className="purple">Product Manager Intern</span> at Medront.
            <br />
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> E-Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to create innovations that leave a lasting impact!"{" "}
          </p>
          <footer className="blockquote-footer">Arun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
