import React from "react";
import { Element } from "react-scroll";
import services from '../services.json'
import Service from "./Service";

const OurServices = ({ name }) => {
  return (
    <Element name={name} className="section mrt">
      <div className="container">
        <h2 className="section-heading">our services</h2>
        <p className="section-sub-heading">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          eveniet?
        </p>

        <div className="col-services">
          {services.map(service => (
            <Service key={service.id} className="service" service={service}/>
            
          ))}
        </div>
      </div>
    </Element>
  );
};

export default OurServices;
