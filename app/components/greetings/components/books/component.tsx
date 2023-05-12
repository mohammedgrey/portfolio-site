import { classNames } from "@/utils/helpers";
import styles from "./styles.module.scss";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { blocks, bookStart, books } from "./data";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import StickyNote from "./sickyNote";

const BookTitle: FC<{ index: number }> = ({ index }) => {
  const [titleIndex, setTitleIndex] = useState(-1);

  useEffect(() => {
    if (index >= bookStart && index < bookStart + books.length) {
      setTitleIndex(index - bookStart);
    }
  }, [index]);
  const book = books[titleIndex];
  const Icon = book?.icon;

  return (
    <Fragment>
      <div className={styles.spine}>
        <p>{book?.title}</p>
      </div>
      {Icon && (
        <Icon
          style={{ color: "white", translate: "2px -30px", fontSize: "20px" }}
        />
      )}
    </Fragment>
  );
};

const DivBlock: FC<{ index: number }> = ({ index }) => {
  return (
    <div className={classNames(styles.block, styles["b" + index])}>
      <div className={styles["block-inner"]}>
        <div className={styles.back}></div>
        <div className={styles.bottom}></div>
        <div className={styles.front}></div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.top}></div>
      </div>
    </div>
  );
};

const LabelBlock: FC<{ index: number }> = ({ index }) => {
  const bookId = index - bookStart;
  if (index >= bookStart && index < bookStart + books.length) {
    const book = books[bookId];
    const Icon = book?.icon;

    return (
      <label
        htmlFor={"book" + (bookId + 1)}
        className={classNames(styles.block, styles["b" + index])}
      >
        <div className={styles["block-inner"]}>
          <div className={styles.back}></div>
          <div className={styles.bottom}></div>
          <div className={styles.front}>
            <BookTitle index={index} />
          </div>
          <div className={styles.left}></div>
          <div className={styles.right} data-title={book.title}>
            <div className={styles.cover}></div>
            <div className={styles.contents}>
              <h1>{book.title}</h1>
              <p style={{ fontSize: "14px" }}>{book.description}</p>
            </div>
          </div>
          <div className={styles.top}></div>
        </div>
      </label>
    );
  }
  return <DivBlock index={index} />;
};

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
      blocksArr.push(<LabelBlock index={b} key={b} />);
    } else {
      blocksArr.push(<DivBlock index={b} key={b} />);
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
      <StickyNote>Skills, Technologies & Frameworks</StickyNote>
    </div>
  );
}

export default Books;
