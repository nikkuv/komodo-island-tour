"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./numberCounter.module.scss";

const slideUp = {
  initial: {
    y: "100%",
  },
  open: ([i, total]) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.2 * (total - i - 1) },
  }),
  closed: ([i, total]) => ({
    y: "-100%",
    transition: { duration: 0.5, delay: 0.2 * (total - i - 1) },
  }),
};


const Counter = () => {
  const [index, setIndex] = useState(0);
  const [percentageUp, setPercentageUp] = useState(false);
  const numbers = [10, 57, 89, 100]; // Your array of numbers

  useEffect(() => {
    let interval;

    if (index < numbers.length - 1) {
      interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      // Trigger upward animation for % symbol after a delay.
      setTimeout(() => {
        setPercentageUp(true);
      }, 1200);
    }

    return () => clearInterval(interval);
  }, [numbers.length, index]);

  const count = numbers[index];

  return (
    <div className={styles.counterContainer}>
      <div>
        {[...String(count)].map((digit, i) => {
          return (
            <div className={styles.mask} key={i}>
              <AnimatePresence>
                <motion.span
                  key={digit + "-" + i + "-" + count}
                  initial="initial"
                  animate={percentageUp ? "closed" : "open"}
                  exit="closed"
                  className={styles.digit}
                  variants={slideUp}
                  custom={[i, String(count).length]}
                >
                  {digit}
                </motion.span>
              </AnimatePresence>
            </div>
          );
        })}
        <div className={styles.percentageMask}>
          <motion.span
            initial="initial"
            animate={percentageUp ? "closed" : "open"}
            exit="closed"
            variants={slideUp}
            custom={[String(count).length, String(count).length + 1]} // Added custom prop
            className={styles.percentage}
          >
            %
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
