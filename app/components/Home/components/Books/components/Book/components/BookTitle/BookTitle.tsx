import { FC, Fragment, useEffect, useState } from "react";
import styles from "../../../../styles.module.scss";
import { bookStart } from "../../../../data";
import { books } from "../../../../data";

type Props = { index: number };
const BookTitle: FC<Props> = ({ index }) => {
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

export default BookTitle;
