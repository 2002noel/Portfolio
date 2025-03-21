import React from 'react';
import '../styles/Hero.css';
import { AnimatePresence, motion } from "framer-motion";
import ProfileImage from '../assets/Profile.PNG';
import HorseImage from '../assets/Horse.png';
import CologneImage from '../assets/Colonge.png';

const Hero = () => {
  const [[activeIndex, direction], setActiveIndex] = React.useState([0, 0]);
  const images = [
    { src: ProfileImage, alt: "Profile" },
    { src: HorseImage, alt: "Horse" },
    { src: CologneImage, alt: "Cologne" },
    // Add more images here when you have them
    // { src: Image2, alt: "Image 2" },
    // { src: Image3, alt: "Image 3" },
  ];

  // Keep index within array bounds for endless carousel
  const indexInArrayScope = ((activeIndex % images.length) + images.length) % images.length;

  // Create array of visible items (3 at a time)
  const visibleImages = [...images, ...images].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Noel Kim</span></h1>
        <h2>Computer Science Graduate</h2>
        <p>I create and design software that I find useful and fun. I also enjoy art and snowboarding.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="carousel">
          <div className="carousel-container">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleImages.map((image, index) => (
                <motion.div
                  className="carousel-item"
                  key={image.alt + index}
                  layout
                  custom={{
                    direction,
                    position: () => {
                      if (index === 0) return "left";
                      if (index === 1) return "center";
                      return "right";
                    }
                  }}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8 }}
                >
                  <img src={image.src} alt={image.alt} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="carousel-controls">
            <motion.button
              className="carousel-btn prev"
              whileTap={{ scale: 0.8 }}
              onClick={() => handleClick(-1)}
            >
              ❮
            </motion.button>
            <motion.button
              className="carousel-btn next"
              whileTap={{ scale: 0.8 }}
              onClick={() => handleClick(1)}
            >
              ❯
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const variants = {
  enter: ({ direction }) => ({
    scale: 0.2,
    x: direction < 1 ? 100 : -100,
    opacity: 0
  }),
  center: ({ position }) => ({
    scale: position() === "center" ? 1 : 0.7,
    x: 0,
    zIndex: getZIndex(position()),
    opacity: 1
  }),
  exit: ({ direction }) => ({
    scale: 0.2,
    x: direction < 1 ? -100 : 100,
    opacity: 0
  })
};

function getZIndex(position) {
  const indexes = {
    left: 1,
    center: 2,
    right: 1
  };
  return indexes[position];
}

export default Hero; 