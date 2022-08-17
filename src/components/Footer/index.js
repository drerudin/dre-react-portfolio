import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";


function Footer() {
        return (
            <footer className="footer" id="footer">
            <h4>Contact Me</h4>
    
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
    
            </ul>
    
        </footer>
        );
}

export default Footer;