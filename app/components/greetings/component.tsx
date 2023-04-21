"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function Greetings() {
  return (
    <div
      className={styles.upperBlock}
      style={{
        backgroundImage: `url("/assets/images/background.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "bottom",
      }}
    >
      <motion.div
        initial={{ scale: 0, x: -90 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className={styles.homeInfo}
      >
        <p className={styles.laptopText}>Hello, I am</p>
        <h1 className={styles.laptopTitle}>Mohammed Saad</h1>
        <p className={styles.laptopText}>A Software Engineer </p>
      </motion.div>
      <div className={styles.frameContainer}>
        <Image
          className={styles.imageFrame}
          src={"/assets/images/frame.png"}
          alt="hello"
          height="165"
          width="121"
        />
        <Image
          className={styles.imageMe}
          src={"/assets/images/me.png"}
          alt="hello"
          height="100"
          width="90"
        />
      </div>
    </div>
  );
}
