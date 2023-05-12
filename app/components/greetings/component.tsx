"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Laptop from "./components/laptop/component";
import Frame from "./components/frame";
import Books from "./components/books/component";
import Desk from "./components/desk/component";

export default function Greetings() {
  return (
    <div
      style={{
        backgroundColor: "var(--card-color)",
        padding: "32px",
        borderRadius: "16px",
        minHeight: "400px",
        position: "relative",
      }}
    >
      <div className="space-between">
        <Frame />
        <div style={{ translate: "0px 100px", zIndex: 6 }}>
          <Laptop>
            <div className={styles["input-wrapper"]}>
              <span data-typed="hello" className={styles.placeholder}></span>
            </div>
          </Laptop>
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <Books />
        </div>
      </div>
    </div>
  );
}
