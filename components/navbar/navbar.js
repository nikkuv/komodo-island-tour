import styles from "./navbar.module.scss";
import { motion } from "framer-motion";

const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5 },
  },
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const swingIn = {
  initial: {
    y: "100%",
    rotate: "15deg",
    originX: "0%",  // Adjusted pivot to the leftmost point
    originY: "0%",
  },
  open: {
    y: "0%",
    rotate: "0deg",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  closed: {
    y: "100%",
    rotate: "15deg",
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

function NavigationMenu() {
  return (
    <div className={styles.navigationBar}>
      <motion.div
        initial="initial"
        animate="open"
        exit="closed"
        variants={swingIn}
        className={styles.navigationLinksContainer}
      >
        {["About", "Packages", "Tour Guide", "Blogs"].map((link, index) => (
          <span className={styles.mask} key={index}>
            <p className={styles.navigationLink}>{link}</p>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default NavigationMenu;
