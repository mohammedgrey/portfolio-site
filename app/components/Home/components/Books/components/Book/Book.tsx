import { classNames } from "@/helpers";
import { FC } from "react";
import { bookStart, books } from "../../data";
import styles from "../../styles.module.scss";
import BookTitle from "./components/BookTitle/BookTitle";

type Props = { index: number };

const Book: FC<Props> = ({ index }) => {
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
  return null;
};

export default Book;
