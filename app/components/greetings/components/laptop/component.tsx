import React, { FC, ReactNode } from "react";
import Image from "next/image";
import images from "@/configs/images";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { classNames } from "@/utils/helpers";
type Props = {
  children: ReactNode;
  scale?: number;
};

const Laptop: FC<Props> = ({ children, scale = 0.45 }) => {
  const laptopSize = {
    width: 803 * scale,
    top: {
      height: 14 * scale,
    },
    base: {
      height: 21 * scale,
    },
    screen: {
      width: 694 * scale,
      height: 466 * scale,
    },
  };
  return (
    <div className={styles.container}>
      <div
        className={classNames(
          styles.mockup,
          styles["mockup-macbook"],
          styles.loaded,
          styles.opened
        )}
      >
        <motion.div
          className={classNames(styles.part, styles.top)}
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
        >
          <Image
            width={laptopSize.width}
            height={laptopSize.top.height}
            src={images.home.laptop.top.closed}
            alt=""
            className={classNames(styles.top, styles.image)}
          />
          <Image
            width={laptopSize.screen.width}
            height={laptopSize.screen.height}
            src={images.home.laptop.top.open}
            alt=""
            className={classNames(styles.cover, styles.image)}
          />

          <div
            className={styles.content}
            style={{ height: laptopSize.screen.height }}
          >
            {children}
          </div>
        </motion.div>
        <div className={classNames(styles.part, styles.bottom)}>
          <Image
            width={laptopSize.screen.width}
            height={laptopSize.screen.height}
            src={images.home.laptop.top.open}
            alt=""
            className={classNames(styles.cover, styles.image)}
          />
          <Image
            width={laptopSize.width}
            height={laptopSize.base.height}
            src={images.home.laptop.base}
            alt=""
            className={classNames(styles.bottom, styles.image)}
          />
        </div>
      </div>
    </div>
  );
};
export default Laptop;
