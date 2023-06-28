"use client";
import useWindowSize from "@/hooks/useWindowSize";
import Books from "./components/Books/Books";
import Frame from "./components/Frame/Frame";
import Laptop from "./components/Laptop/Laptop";
import styles from "./styles.module.scss";

export default function Home() {
  const { isMobilePhoneSize } = useWindowSize();

  const LaptopRendered = (
    <Laptop scale={isMobilePhoneSize ? 0.4 : 0.45}>
      <div className={styles["input-wrapper"]}>
        <span className={styles.placeholder}></span>
      </div>
    </Laptop>
  );

  return (
    <div className={styles["home-container"]}>
      <div className="space-between">
        <Frame />
        <div className={styles.laptopWrapperLargeScreen}>{LaptopRendered}</div>

        <div className={styles.booksWrapperLargeScreen}>
          {!isMobilePhoneSize && <Books key="books-large-screen" />}
        </div>
      </div>
      <div className={styles.laptopWrapperSmallScreen}>{LaptopRendered}</div>

      <div className={styles.booksWrapperSmallScreen}>
        {isMobilePhoneSize && <Books key="books-small-screen" />}
      </div>
    </div>
  );
}
