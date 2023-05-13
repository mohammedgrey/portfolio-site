import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useRef } from "react";
import { blocks, bookStart, books } from "./data";
import styles from "./styles.module.scss";
import Book from "./components/Book/Book";
import Shelf from "./components/Shelf/Shelf";

function Books() {
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
