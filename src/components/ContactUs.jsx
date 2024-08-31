import React from "react";
import { Element } from "react-scroll";
import {
  FaPhone,
  FaEnvelopeOpenText,
  FaMapMarker,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import infoImg1 from '../assets/images/location-bg.jpg'
import infoImg2 from '../assets/images/email-bg.jpg'

const ContactUs = ({ name }) => {
  return (
    <Element name={name} className="mrt">
      <div className="container-md">
        <h2 className="section-heading">Get In touch</h2>
        <p className="section-sub-heading">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          eveniet?
        </p>
        <div className="company-info">

        <AnimatedSection animation={{
            transform: { start: 'translateX(-60px)', end: 'translateX(0)' },
            delay: 300
          }}> 
          <div className="info info-1" style={{backgroundImage: `url(${infoImg1})`}}>
            <FaMapMarker className="info-icon" />
            <h4>Our Location</h4>
            <p>Deru Dave No.50 Dave</p>
          </div>
          </AnimatedSection>


          <AnimatedSection animation={{
            transform: { start: 'translateY(50px)', end: 'translateY(0)' },
            delay: 400
          }}> 

          <div className="info info-2">
            <FaPhone className="info-icon" />
            <h4>Call To Questions</h4>
            <p>(+231) 800-675</p>
          </div>
          </AnimatedSection>


          <AnimatedSection animation={{
            transform: { start: 'translateY(50px)', end: 'translateY(0)' },
            delay: 500
          }}> 

          <div className="info info-3" style={{backgroundImage: `url(${infoImg2})`}}>
            <FaEnvelopeOpenText className="info-icon" />
            <h4>Email Us</h4>
            <p>Demo@gmail.com</p>
          </div>

          </AnimatedSection>



          <AnimatedSection animation={{
            transform: { start: 'translateX(60px)', end: 'translateX(0)' },
            delay: 600
          }}> 

          <div className="info info-4">
            <FaClock className="info-icon" />
            <h4>Working Hours</h4>
            <p>Mon - Sat: 9.00 - 5.00</p>
          </div>

          </AnimatedSection>
        </div>
        <AnimatedSection animation={{
            transform: { start: 'translateY(80px)', end: 'translateY(0)' },
            delay: 700
          }}> 
        <form className="contact-us">
          <input
            type="text"
            className="input input-name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="input input-email"
            placeholder="Your Email Address"
          />
          <textarea
            placeholder="Write Messaage"
            className="input input-message"
            cols="30"
            rows="10"
          ></textarea>
          <div className="inner-container">
            <button className="btn btn-contact">send a message</button>
             <ul className="social">
              <li><a href="#"><FaFacebook className="social-icon"/></a></li>
              <li><a href="#"><FaTwitter className="social-icon"/></a></li>
              <li><a href="#"><FaLinkedinIn className="social-icon"/></a></li>
             </ul>
          </div>
        </form>
        </AnimatedSection>
      </div>
    </Element>
  );
};

export default ContactUs;
