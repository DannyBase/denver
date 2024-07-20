
import {Link, Element } from "react-scroll";
import videoBg from "../assets/videos/bg/video-bg.webm";
import Navbar from "./Navbar";
import AnimatedSection from './AnimatedSection';

const Home = ({name}) => {
  return (
    <Element name={name} className="section hero">
      <video src={videoBg} autoPlay muted loop></video>
      <Navbar />
      <div className="container">
    
        <div className="hero-text">
        <AnimatedSection animation={{
            transform: { start: 'translateX(-100px)', end: 'translateX(0)' },
            delay: 400
          }}>
          <p>Welcome To Denver consultancy</p>
          <h2>
            We unlock solutions to propel your business forward.
          </h2>
        </AnimatedSection>
        <AnimatedSection animation={{
            transform: { start: 'translateY(80px)', end: 'translateY(0)' },
            delay: 550
          }}>
          <Link to="contact-us" className="btn btn-contact" smooth={true} duration={500} >Learn More</Link>
          </AnimatedSection>
        </div>

      </div>
    </Element>
  );
};

export default Home;
