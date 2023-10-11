"use client";
import NavigationMenu from "../navbar/navbar";
import styles from "./header.module.scss";
import Button from "../button/button";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
      duration: 1.5, 
      ease: [0.6, -0.05, 0.01, 0.99] // example bezier curve for easing
    },
  },
  closed: {
    y: "100%",
    rotate: "10deg",
    transition: { 
      duration: 1.5, 
      ease: [0.6, -0.05, 0.01, 0.99] // example bezier curve for easing
    },
  },
}

const containerVariants = {
  open: {
    transition: {
      // When the container enters, it'll delay by 0.3 before it starts animating its children
      delayChildren: 0.1,
      staggerChildren: 0.1,  // Then it'll stagger the animation of its children by 0.3
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
      ease: [0.6, -0.05, 0.01, 0.99]
    },
  },
};

function Header() {

  const [ref, inView] = useInView({
    threshold: 0.25,  // Percentage of the element that's visible for the callback to be triggered
    triggerOnce: true // Ensures the callback is invoked only once
  });

  return (
    <div ref={ref} className={styles.headerContainer}>
      <span className={styles.headermask}>
        <motion.span 
          initial="initial" 
          animate="open" 
          exit="closed" 
          variants={containerVariants} 
          className={styles.motionspan}
        >
          <motion.p variants={childVariants} className={styles.headingTitle}>
            Komodone
          </motion.p>
          <motion.div variants={childVariants}>
            <NavigationMenu />
          </motion.div>
          <motion.div variants={childVariants}>
            <Button />
          </motion.div>
        </motion.span>
      </span>
    </div>
  );
}

export default Header;
