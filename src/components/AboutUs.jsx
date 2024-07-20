import React from "react";
import { Link, Element } from "react-scroll";
import aboutUs from "../assets/images/about/about.jpg";
import AnimatedSection from "./AnimatedSection";

const AboutUs = ({ name }) => {
  return (
    <Element name={name} className="section mrt">
      <div className="container">
        <h2 className="section-heading">About us</h2>
        <p className="section-sub-heading">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          eveniet?
        </p>

        <div className="col-about">
          <div className="about-img">
        <AnimatedSection animation={{
            transform: { start: 'scale(0.5)', end: 'scale(1)' },
            delay: 100
          }}>
            <img src={aboutUs} alt="aboutUs" />
          </AnimatedSection>
          </div>

          <div className="about-txt">
          <AnimatedSection animation={{
            transform: { start: 'translateX(100px)', end: 'translateX(0)' },
            delay: 200
          }}>  
            <h1>consulting for every business</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              asperiores necessitatibus vitae fugit minima similique nemo sed
              velit! Architecto magnam sint officiis doloribus perspiciatis
              blanditiis nulla placeat modi quasi quidem?
            </p>
          </AnimatedSection>

          <AnimatedSection animation={{
            transform: { start: 'translateY(50px)', end: 'translateY(0)' },
            delay: 300
          }}> 
            <Link to="contact-us" className="btn btn-contact" smooth={true} duration={500} >Learn More</Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;
