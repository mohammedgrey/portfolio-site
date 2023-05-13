import { classNames } from "@/helpers";
import { FC } from "react";
import styles from "../../styles.module.scss";

type Props = { index: number };

const Shelf: FC<Props> = ({ index }) => {
  return (
    <div className={classNames(styles.block, styles["b" + index])}>
      <div className={styles["block-inner"]}>
        {["back", "bottom", "front", "left", "right", "top"].map(
          (shelfSide) => (
            <div key={shelfSide} className={styles[shelfSide]}></div>
          )
        )}
      </div>
    </div>
  );
};

export default Shelf;
