import React from 'react';
import profilePic from "../../assets/images/together.jpg";

function About() {
  return (
    <section class="about-section">
      <h1 id="about">About Me</h1>
      <section className="about-me">
      <img src={profilePic} class="together" style={{ width: "50%" }} alt="Me and Nataliia together" />
      <p id="ourstory">
      Born in Ukraine, spending the first 8 years of my life in Sochi, Russia, and growing up in California, I have a deep cultural background.  My first love is of course for my God and my savior Jesus Christ.  My 2nd is my wife Nataliia who also was born in Ukraine and moved to the US to marry me.
        
        I have worked in retail since 2007, mostly in sales of appliances and in some cases helping the company as a store or sales manager.  I have worked at Airport Home Appliance since 2015.
     
        My interest has always been in computers though and I have taken the steps to learn development work as you can see in my portfolio.
    </p>
    </section>
    </section>
  );
}

export default About;