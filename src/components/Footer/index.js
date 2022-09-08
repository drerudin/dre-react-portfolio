import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";


function Footer() {
        return (
            <footer className="footer" id="footer">
                <div className="footer-content">
    
            <ul>
    
               <li>
                <a href="tel:510.996.2753"><FontAwesomeIcon icon={faMobile}/></a>
                </li>
                <li>
                <a href="mailto:drerudin@gmail.com"><FontAwesomeIcon icon={ faEnvelope }/></a>
                </li>
                <li>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/1dAO5QljPQUruDjbUj1EK9472JhWhA5da7xq55c0ELp4/edit?usp=sharing" target="_blank" rel="noreferrer noopener">Resume Download</a>
                </li>
    
            </ul>
            </div>
    
        </footer>
        );
}

export default Footer;