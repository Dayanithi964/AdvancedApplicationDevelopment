import React from 'react';
import '../assets/About.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function About() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>

      <section className="about-section">
        <div className="about-box">
          <h2>About British English Certification (BEC)</h2>
          <div className="about-content">
            <div className="about-description">
              <p>
                British English Certification (BEC) is a leading provider of internationally recognized examinations that assess English language proficiency based on the Common European Framework of Reference for Languages (CEFR). We offer a comprehensive suite of four exams at various levels, catering to individuals and organizations seeking to validate their British English skills and enhance their global communication capabilities.
              </p>
              <p>
                Our mission is to empower individuals and organizations by fostering excellence in British English communication. We achieve this through rigorous testing, high-quality learning resources, and a commitment to continuous improvement in our certification processes.
              </p>
            </div>
            <div className="achievements">
              <h3>Our Achievements</h3>
              <ul>
                <li>Accredited by reputable organizations (mention specific accreditations, if applicable).</li>
                <li>Trusted by thousands of organizations and individuals worldwide. We have issued over {/* Update with the actual number */} 1500 BEC certifications, helping people achieve their language goals.</li>
                <li>Globally recognized certifications used for educational and professional purposes.</li>
                <li>High passing rates reflecting the effectiveness of our testing methods.</li>
                <li>Commitment to ongoing development and innovation in English language assessment.</li>
              </ul>
            </div>
          </div>
         
        </div>
      </section>
     
    </div>
  );
}

export default About;