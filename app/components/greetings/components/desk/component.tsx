import React from "react";
import styles from "./styles.module.scss";
import images from "@/configs/images";
import Image from "next/image";

export default function Desk() {
  return (
    <div className={styles.desk}>
      <Image src={images.home.desk} alt="Desk" fill />
    </div>
  );
}
