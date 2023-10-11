// components/ImageSlider.js

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./sliderimage.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const phrases = ["Dragon is not a myth.", "Dragon is Komodo"];

const swingIn = {
  initial: {
    y: "100%",
    rotate: "15deg",
    originX: "0%", // Adjusted pivot to the leftmost point
    originY: "0%",
  },
  open: {
    y: "0%",
    rotate: "0deg",
    transition: { duration: 1, ease: [0.61, 1, 0.88, 1] },
  },
  closed: {
    y: "100%",
    rotate: "15deg",
    transition: { duration: 1, ease: [0.61, 1, 0.88, 1] },
  },
};

const containerVariants = {
  open: {
    transition: {
      // When the container enters, it'll delay by 0.3 before it starts animating its children
      delayChildren: 0.1,
      staggerChildren: 0.1, // Then it'll stagger the animation of its children by 0.3
    },
  },
};

// const childVariants = {
//   ...swingIn,
//   open: {
//     y: "0%",
//     rotate: "0deg",
//     transition: {
//       duration: 1.5,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

const ImageSlider = ({ images }) => {

  const [ref, inView] = useInView({
    threshold: 0.25,  // Percentage of the element that's visible for the callback to be triggered
    triggerOnce: true // Ensures the callback is invoked only once
  });

  return (
    <div ref={ref} className={styles.ImageSlider}>
      <div className={styles.imageSliderContainer}>
        <div className={styles.container}>
          <div className={styles.mainHeading}>
            {phrases.map((phrase, phraseIndex) => (
              <motion.div
                key={phraseIndex}
                className={styles.phraseMask}
                variants={containerVariants}
                initial="initial"
                animate={inView ? "open" : ""}
                custom={phraseIndex}
              >
                {phrase.split(" ").map((word, wordIndex) => (
                  <motion.span
                    variants={swingIn}
                    className={styles.title}
                    key={wordIndex}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </div>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            className={styles.swiperContainer}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.SwiperSlide}>
                  <Image
                    src={image}
                    alt={`${image}-${index}`}
                    width={400}
                    height={500}
                    className={styles.imgStyle}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
