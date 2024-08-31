import React from 'react'
import AnimatedSection from './AnimatedSection'


const Service = ({service, className}) => {
  return (
    
           <div className={className}>
            <AnimatedSection animation={{
            transform: { start: 'translateY(-60px)', end: 'translateY(0)' },
      delay: 200
    }}>
            <div className="img-wrapper">
              <img src={service.image} className="service-img" alt={service.name} />
            </div>
          </AnimatedSection>



          <AnimatedSection animation={{
            transform: { start: 'translateY(60px)', end: 'translateY(0)' },
            delay: 400
          }}> 
            <div className="service-txt">
              <h4>{service.name}</h4>
              <p>
                {service.description}
              </p>
            </div>
            </AnimatedSection>
          </div>
  )
}

export default Service