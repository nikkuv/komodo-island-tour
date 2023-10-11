"use client";
import Button from "../button/button";
import styles from "./headerSection.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const phrases = ["One way to visit", "Komodo Island"];

const containerVariants = {
  open: {
    transition: {
      // When the container enters, it'll delay by 0.3 before it starts animating its children
      delayChildren: 0.1,
      staggerChildren: 0.1, // Then it'll stagger the animation of its children by 0.3
    },
  },
};

const childVariants = {
  ...swingIn,
  open: {
    y: "0%",
    rotate: "0deg",
    transition: {
      duration: 1.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const imageVariants = {
  outOfView: {
    scale: 1,
    transition: { duration: 0.5, ease: [0.61, 1, 0.88, 1] },
  },
  inView: {
    scale: 0.9,
    transition: { duration: 0.5, ease: [0.61, 1, 0.88, 1] },
  }, // shrink the image a bit
};

const outerCircleVariants = {
  initial: {
    scale: 1,
    transition: { duration: 0.5, ease: [0.61, 1, 0.88, 1] },
  },
  hover: {
    scale: 1.5,
    transition: { duration: 0.5, ease: [0.61, 1, 0.88, 1] },
  }, // scale up the outer circle on hover
};

function HeadeSection() {
  const [ref, inView] = useInView({
    threshold: 0.25, // Percentage of the element that's visible for the callback to be triggered
    triggerOnce: true, // Ensures the callback is invoked only once
  });

  const [imageRef, imageInView] = useInView({
    threshold: 0.25,
  });

  const outerCircleControls = useAnimation();

  return (
    <div ref={ref} className={styles.tourPackageSection}>
      <div className={styles.tourPackageContainer}>
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
                  className={styles.phrase}
                  key={wordIndex}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </div>
        <span className={styles.phraseMask}>
          <motion.div
            variants={childVariants}
            initial="initial"
            animate={inView ? "open" : "closed"}
          >
            <p className={styles.tourPackageDescription}>
              Welcome to our Komodo Island tour package, where you can
              experience the beauty and wonder of this unique Indonesian
              destination
            </p>
          </motion.div>
        </span>
        <span className={styles.phraseMask}>
          <motion.div
            variants={childVariants}
            initial="initial"
            animate={inView ? "open" : "closed"}
          >
            <Button />
          </motion.div>
        </span>
      </div>
      <div className={styles.headerImgContainer}>
        <motion.div
          ref={imageRef}
          className={styles.headerImage}
          variants={imageVariants}
          initial="outOfView"
          animate={imageInView ? "inView" : "outOfView"}
          onHoverStart={() => outerCircleControls.start("hover")}
          onHoverEnd={() => outerCircleControls.start("initial")}
        >
          <motion.div
            className={styles.outerCircle}
            variants={outerCircleVariants}
            initial="initial"
            animate={outerCircleControls}
          >
            <div className={styles.innerCircle}>
              <p>Play</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default HeadeSection;
