"use client";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useEffect, useRef, useState } from "react";
import { blocks, bookStart, books } from "./data";
import styles from "./styles.module.scss";
import Book from "./components/Book/Book";
import Shelf from "./components/Shelf/Shelf";
import { isMobile as isMobileCheck } from "@/helpers";

function Books() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLFormElement | null>(null);
  useOnClickOutside(containerRef, () => inputRef.current?.click());
  const bookLabels = [];
  for (let r = 1; r <= books.length; ++r) {
    bookLabels.push(
      <input
        className={styles.input}
        type="radio"
        name="title"
        id={"book" + r}
        key={"book" + r}
      />
    );
  }

  const blocksArr = [];
  for (let b = 1; b <= blocks; ++b) {
    if (b >= bookStart && b < bookStart + books.length) {
      blocksArr.push(<Book index={b} key={b} />);
    } else {
      blocksArr.push(<Shelf index={b} key={b} />);
    }
  }

  useEffect(() => {
    setIsMobile(isMobileCheck());
  }, []);

  if (isMobile === undefined) {
    return null;
  }

  if (isMobile) {
    return (
      <div style={{ borderRadius: 10, overflow: "hidden" }}>
        {books.map((b, i) => (
          <div
            key={b.title}
            style={{
              display: "flex",
              gap: 16,
              padding: 16,
              alignItems: "center",
              backgroundColor:
                i % 2 ? "var(--alternate-color)" : "var(--card-color)",
            }}
          >
            <b.icon style={{ fontSize: 32, color: b.color }} />
            <div>
              <p style={{ marginBottom: 8 }}>{b.title}</p>
              <p style={{ fontSize: 12, color: "var(--description-color)" }}>
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <form className={styles.container} ref={containerRef}>
        {bookLabels}
        <div className={styles.surface}>{blocksArr}</div>
        <input
          hidden
          ref={inputRef}
          className={styles.input}
          type="reset"
          value="Place Back"
        />
      </form>
    </div>
  );
}

export default Books;
