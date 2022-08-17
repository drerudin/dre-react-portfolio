import React from "react";
import runbuddy from '../../assets/images/run-buddy.png'
import readmegene from '../../assets/images/readmegenerator.png'

function Portfolio () {
    return (
        <section id="portfolio" className="flex-row">
            <ul className="">
                <li>
                    <h5>Run-Buddy Project</h5>
                    <a href="https://drerudin.github.io/run-buddy/" alt="run-buddy project"><img src={runbuddy} alt="run-buddy project screenshot" /></a>
                </li>
                <li>
                    <h5>Readme Generator</h5>
                    <a href="https://github.com/drerudin/readme-generator" alt="readme-generator"><img src={readmegen} alt="readme generator screenshot"></img></a>
                </li>
                <li>
                    <a><img></img></a>
                </li>
                <li>
                    <a><img></img></a>
                </li>
                <li>
                    <a><img></img></a>
                </li>
                <li>
                    <a><img></img></a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;