import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };


    window.addEventListener("load", handleLoad);
  

    return () => {
      window.removeEventListener("load", handleLoad);
     
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign:"center",
            zIndex: 10000,
            backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(10px)"
          }}>
          <Spinner loading={loading} />
        </div>
      )}

      <Home name="home" />

      <AboutUs name="about-us" />

      <OurServices name="our-services" />

      <Team name="team" />

      <Testimonials name="testimonials" />

      <ContactUs name="contact-us" />

      <Footer />
    </>
  );
};

export default App;
