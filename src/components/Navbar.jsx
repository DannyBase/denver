import {useState, useEffect} from "react";
import { Link, Element, Events, scrollSpy } from 'react-scroll';




const Navbar = () => {


  const [scrolled, setScrolled] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  const [activeSection, setActiveSection] = useState('');


    useEffect(() =>{
      const handleScroll = () =>{
        const offset = window.scrollY
        if(offset > 50){
          setScrolled(true)
        }else{
          setScrolled(false)
        }
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    },[])


    
  useEffect(() => {

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <h2 className="logo">
            <Link to="home"  smooth={true} duration={500} >Denver</Link>
          </h2>
          <div className={ `open-nav-icon ${openNav ? 'open' : ''}` } onClick={() => setOpenNav((prevState) => !prevState)} >
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </div>
          <ul className={openNav ? 'open-nav' : ''}>
            <li>
              <Link to="home" activeClass="active"  smooth={true} duration={500} onSetActive={handleSetActive}  spy={true} >
                Home
              </Link>
            </li>
            <li>
              <Link to="about-us"  smooth={true} duration={500} onSetActive={handleSetActive}  spy={true} activeClass="active">
                About Us
              </Link>
            </li>
            <li>
              <Link to="our-services"  smooth={true} duration={500} onSetActive={handleSetActive} spy={true} activeClass="active">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="team"  smooth={true} duration={500} onSetActive={handleSetActive}     spy={true} activeClass="active">
                Team
              </Link>
            </li>
            <li>
              <Link to="testimonials"  smooth={true} duration={500} onSetActive={handleSetActive} spy={true} activeClass="active">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="contact-us"  smooth={true} duration={500} onSetActive={handleSetActive} spy={true} activeClass="active">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
