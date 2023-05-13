"use client";
import styles from "./styles.module.scss";
import Frame from "./components/Frame/Frame";
import Laptop from "./components/Laptop/Laptop";
import Books from "./components/Books/Books";
import StickyNote from "./components/StickyNote/StickyNote";

export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <div className="space-between">
        <Frame />
        <div style={{ translate: "0px 100px", zIndex: 6 }}>
          <Laptop>
            <div className={styles["input-wrapper"]}>
              <span data-typed="hello" className={styles.placeholder}></span>
            </div>
          </Laptop>
        </div>
        <div
          style={{ position: "relative", zIndex: 5, paddingBlockStart: "32px" }}
        >
          <Books />
          {/* <StickyNote>Skills, Technologies & Frameworks</StickyNote> */}
        </div>
      </div>
    </div>
  );
}
