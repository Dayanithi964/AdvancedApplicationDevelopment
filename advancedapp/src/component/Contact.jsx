import React from 'react';
import '../assets/Contact.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
    <div>
        <NavigationBar/>
      </div>
    <div className="contact-container">
      
     <div className='page-contact'>
     
      <p><b>Feel free to send us a message or reach out to us using the information below.</b></p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
      <div className="contact-info">
        
      </div>
      </div>
      
    </div>
  );
}

export default Contact;