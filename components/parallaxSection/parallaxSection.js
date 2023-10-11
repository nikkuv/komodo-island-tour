import styles from "./parallax.module.scss";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const phrases = [
  "Welcome to Komodone, your go-to",
  "tour package agency for all your",
  "travel needs. With years of experience",
  "in the travel industry, we are",
  "committed to providing our customers",
  "with exceptional and unforgettable",
  "experiences",
];

const containerVariants = {
  initial: { opacity: 0 },
  open: i => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,                  // Each word will appear with a delay of 0.3
      delayChildren: 0.1 + (i * 0.1 * 5),    // The delay before the first word of each phrase appears
      ease: [0.6, -0.05, 0.01, 0.99]         // Multiplied by 5 (or whatever the average word count you expect per phrase)
    },
  }),
};

const swingIn = {
  initial: {
    y: "100%",
    rotate: "10deg",
    originX: "0%",
    originY: "0%",
  },
  open: {
    y: "0%",
    rotate: "0deg",
    transition: { 
      duration: 1.2, 
      ease: [0.6, -0.05, 0.01, 0.99] // example bezier curve for easing
    },
  },
  closed: {
    y: "100%",
    rotate: "10deg",
    transition: { 
      duration: 1.2, 
      ease: [0.6, -0.05, 0.01, 0.99] // example bezier curve for easing
    },
  },
}

function ParallexSection() {

  const [ref, inView] = useInView({
    threshold: 0.25,  // Percentage of the element that's visible for the callback to be triggered // Ensures the callback is invoked only once
  });

  return (
    <div ref={ref} className={styles.tourPackageSection}>
      <p className={styles.tourPackageHeading}>Why Choose Us</p>
      <div className={styles.tourPackageDescription}>
        {phrases.map((phrase, phraseIndex) => (
          <motion.div
            key={phraseIndex}
            className={styles.phraseMask}
            variants={containerVariants}
            initial="initial"
            animate={inView ? "open" : ''}
            custom={phraseIndex}
          >
            {phrase.split(" ").map((word, wordIndex) => (
              <motion.span
                variants={swingIn}
                className={styles.word}
                key={wordIndex}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ParallexSection;
