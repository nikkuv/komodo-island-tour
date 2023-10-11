"use client";
import { slideUp } from "../../utils/animation";
import styles from "./discription.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Discription = () => {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const inInView = useInView(description);

  return (
    <div className={styles.discriptionDiv}>
      <div ref={description} className={styles.discription}>
        {phrase.split(" ").map((word, index) => {
          return (
            <span className={styles.mask} key={index}>
              <motion.span
                initial="initial"
                key={index}
                custom={index}
                variants={slideUp}
                animate={inInView ? "open" : "closed"}
                className={styles.words}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Discription;
