import React from "react";
import { Element } from "react-scroll";
import Service from "./Service";
import serviceImg1 from '../assets/images/services/services-page-img-1.jpg'
import serviceImg2 from '../assets/images/services/services-page-img-2.jpg'
import serviceImg3 from '../assets/images/services/services-page-img-3.jpg'
import serviceImg4 from '../assets/images/services/services-page-img-4.jpg'
import serviceImg5 from '../assets/images/services/services-page-img-5.jpg'
import serviceImg6 from '../assets/images/services/services-page-img-6.jpg'


const services = [
  {
    "id": "q11-bc3-8cc",
    "image": serviceImg1,
    "name": "CONSUMER PRODUCT",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit voluptate id ratione, dolorem recusandae?"
  },

  {
    "id": "23p-qa1-dd1",
    "image": serviceImg2,
    "name": "AUDIT MARKETING",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit voluptate id ratione, dolorem recusandae?"
  },

  {
    "id": "p12-lk1-v3v",
    "image": serviceImg3,
    "name": "FINANCIAL ADVICE",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit voluptate id ratione, dolorem recusandae?"
  },

  {
    "id": "ac4-kd2-0cv",
    "image": serviceImg4,
    "name": "BUSINESS GROWTH",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit voluptate id ratione, dolorem recusandae?"
  },

  {
    "id": "k34-t25-xs9",
    "image": serviceImg5,
    "name": "MARKETING RULES",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit voluptate id ratione, dolorem recusandae?"
  },

  {
    "id": "tyq-op1-dv2",
    "image": serviceImg6,
    "name": "BRANDING    ",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit voluptate id ratione, dolorem recusandae?"
  }
]

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
