import React from "react";
import runbuddy from "../../assets/images/run-buddy.png";
import readmegen from "../../assets/images/readmegenerator.png";
import passgenerator from "../../assets/images/passgenerator.jpg";
import mcquiz from "../../assets/images/mcquiz.png";
import weatherdashboard from "../../assets/images/weatherdashboard.png";
import notetaker from "../../assets/images/note-taker.png";

function Portfolio() {
  return (
    <section id="portfolio" className="flex-row">
      <ul className="projects">
        <li class="project">
          <a
            href="https://drerudin.github.io/run-buddy/"
            alt="run-buddy project"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h5>Run-Buddy Project</h5>
          </a>
          <a
            href="https://drerudin.github.io/run-buddy/"
            alt="run-buddy project"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={runbuddy} alt="run-buddy project screenshot" />
          </a>
        </li>


        <li class="project">
          <a
            href="https://github.com/drerudin/readme-generator"
            alt="readme-generator"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h5>Readme Generator</h5>
          </a>
          <a
            href="https://github.com/drerudin/readme-generator"
            alt="readme-generator"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={readmegen} alt="readme generator screenshot"></img>
          </a>
        </li>


        <li class="project">
          <a
            href="https://github.com/drerudin/password-generator"
            alt="readme-generator"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h5>Password Generator</h5>
          </a>
          <a
            href="https://drerudin.github.io/password-generator/"
            alt="password-generator"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={passgenerator} alt="password generator screenshot"></img>
          </a>
        </li>


        <li class="project">
          <a
            href="https://github.com/drerudin/multiple-choice-quiz"
            alt="multiple-choice-quiz"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h5>Multiple Choice Quiz</h5>
          </a>
          <a
            href="https://drerudin.github.io/multiple-choice-quiz/"
            alt="multiple-choice-quiz"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={mcquiz} alt="multiple choice quiz screenshot"></img>
          </a>
        </li>


        <li class="project">
          <a
            href="https://github.com/drerudin/weather-report"
            alt="weather-report"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h5>Weather Dashboard</h5>
          </a>
          <a
            href="https://drerudin.github.io/weather-report/"
            alt="weather-report"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={weatherdashboard} alt="weather report screenshot"></img>
          </a>
        </li>


        <li class="project">
          <a
            href="https://github.com/drerudin/A11-Note-Taker"
            alt="A11-Note-Taker"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h5>Note Taker</h5>
          </a>
          <a
            href="https://andreys-note-taker.herokuapp.com/"
            alt="A11-Note-Taker"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={notetaker} alt="note taker screenshot"></img>
          </a>
        </li>


      </ul>
    </section>
  );
}

export default Portfolio;
