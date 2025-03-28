import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranay Sharma </span>
    
            <br />
            I am currently employed as a Full Stack Web developer at Brainygyes.
            <br />
            I am in Final Year of Btech Computer Science and Engineeering with Artificial intelligence
            <br />
            <br />
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pranay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
