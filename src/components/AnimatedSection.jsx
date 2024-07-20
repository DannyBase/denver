import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, animation }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const animationProps = useSpring({
    ...animation,
    opacity: inView ? 1 : 0,
    transform: inView ? animation.transform.end : animation.transform.start,
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      {children}
    </animated.div>
  );
};

export default AnimatedSection;
