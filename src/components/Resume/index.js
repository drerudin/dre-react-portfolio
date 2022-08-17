import React from 'react';
import resume from '../../assets/resume/resumepage1.jpg';
import resume2 from '../../assets/resume/resumepage2.jpg';
import resume3 from '../../assets/resume/resumepage3.jpg';

function Resume() {
    return (
        <html>
            <section id='resume'>
            <img src={resume} alt="First page of my resume"></img>
            <img src={resume2} alt="Second page of my resume"></img>
            <img src={resume3} alt="Third page of my resume"></img>
            </section>
        </html>
    )
}

export default Resume;