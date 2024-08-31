import React from 'react'
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import footerBg from '../assets/images/footer.jpg'


const Footer = () => {
  return (
    <footer style={{backgroundImage: `url(${footerBg})`}}>
        <div className="container">
           
           <div className="footer-nav">
            <div className="col-1">
            <h2 className="logo">
            <Link to="home" smooth={true} duration={500} >Denver</Link>
            </h2>
             <ul className='contact-info'>
              <li>Contact us</li>
              <li>Demo@gmail.com</li>
              <li>Deru Dave No.50 Dave</li>
              <li>(+231) 800-675</li>
             </ul>
            <form>
              <p>Subscribe to Get Latest Updates on Daily Basis</p>
              <div className="form-wrapper">
              <input type="email" placeholder="Email Address" />
              <button className="btn btn-news">Register</button>
              </div>
            </form>
            </div>
            <div className="col-2">
              <div className="inner-col">
                <ul>
                <li>
              <Link to="about-us" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="our-services" smooth={true} duration={500}>
                Our Services
              </Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={500}>
                Team
              </Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} duration={500}>
                Testimonials
              </Link>
            </li>
                </ul>
                <p>&copy; 2024 Denver Consultancy, All right Reserved</p>
              </div>
               <ul className="social">
             
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaTwitter/></a></li>
                <li><a href="#"><FaLinkedinIn/></a></li>
               </ul>
            </div>
           </div>
        </div>
    </footer>
  )
}

export default Footer