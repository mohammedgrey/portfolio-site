import images from "@/configs/images";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export default function Frame() {
  return (
    <div className={styles.frameContainer}>
      <Image
        alt="Frame Outline"
        src={images.home.frame.outline}
        width={150}
        height={200}
        className={styles.frame}
      />
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          alt="Frame Photo"
          src={images.home.frame.photo}
          fill
        />
      </div>
    </div>
  );
}
