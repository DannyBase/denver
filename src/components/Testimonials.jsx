import { Element,Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import missionBg from '../assets/images/busi.jpg'
import client1 from '../assets/images/testimonials/img-1.jpg'
import client2 from '../assets/images/testimonials/img-2.jpg'
import client3 from '../assets/images/testimonials/img-3.jpg'
import client4 from '../assets/images/testimonials/img-4.jpg'


const reviews = [
  {
    "id": "fr2-qwe-m2w",
    "image": client1,
    "name": "danny kai",
    "role": "Customer",
    "review": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laboriosam mollitia iste dolorum incidunt iure? Minus reprehenderit ipsa perspiciatis optio dolor totam beatae voluptatum, repellat exercitationem earum! Cupiditate omnis porro maxime quam mollitia consequuntur recusandae."
  },

  {
    "id": "k34-t25-xs9",
    "image": client2,
    "name": "pit matt",
    "role": "Customer",
    "review": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laboriosam mollitia iste dolorum incidunt iure? Minus reprehenderit ipsa perspiciatis optio dolor totam beatae voluptatum, repellat exercitationem earum! Cupiditate omnis porro maxime quam mollitia consequuntur recusandae."
  },

  {
    "id": "jk4-2w3-p0i",
    "image": client3,
    "name": "david benny",
    "role": "Customer",
    "review": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laboriosam mollitia iste dolorum incidunt iure? Minus reprehenderit ipsa perspiciatis optio dolor totam beatae voluptatum, repellat exercitationem earum! Cupiditate omnis porro maxime quam mollitia consequuntur recusandae."
  },

  {
    "id": "df4-lko-09o",
    "image": client4,
    "name": "mary jane",
    "role": "Customer",
    "review": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint laboriosam mollitia iste dolorum incidunt iure? Minus reprehenderit ipsa perspiciatis optio dolor totam beatae voluptatum, repellat exercitationem earum! Cupiditate omnis porro maxime quam mollitia consequuntur recusandae."
  }
]





const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 17l5-5-5-5v10z" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M14 7l-5 5 5 5V7z" />
      </svg>
    </div>
  );
};



const Testimonials = ({name}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Element name={name} className="mrt">
      <div className="container-md">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="section-sub-heading">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          eveniet?
        </p>
        <div className="review-carousel-container">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="review-carousel-slide">
                <AnimatedSection animation={{
            transform: { start: 'scale(0.2)', end: 'scale(1)' },
            delay: 100
          }}>

                <img src={review.image} alt={review.name} />
          </AnimatedSection>
                

                <p>{review.review}</p>
                <FaQuoteLeft className="quote-left" />
                <AnimatedSection animation={{
            transform: { start: 'scale(0.5)', end: 'scale(1)' },
            delay: 250
          }}>
                <div className="client-details">
                  <h3>{review.name}</h3>
                  <p>{review.role}</p>
                </div>
                </AnimatedSection>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="our-mission" style={{backgroundImage: `url(${missionBg})`}}>
        <div className="container">
        <AnimatedSection animation={{
            transform: { start: 'translateY(-70px)', end: 'translateY(0)' },
            delay: 100
          }}> 
          <h1>MISSION IS TO PROTECT YOUR BUSINESSES & MUCH MORE</h1>
          </AnimatedSection>

          <AnimatedSection animation={{
            transform: { start: 'translateY(60px)', end: 'translateY(0)' },
            delay: 250
          }}> 
          <Link to="contact-us" smooth={true} duration={500} className="btn btn-contact">Learn more</Link>
          </AnimatedSection>
        </div>
      </div>
    </Element>
  );
}

export default Testimonials
