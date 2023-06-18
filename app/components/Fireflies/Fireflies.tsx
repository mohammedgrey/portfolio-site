import { FC } from "react";
import styles from "./styles.module.scss";
type Props = {};

const Fireflies: FC<Props> = ({}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.circleContainer}>
            <div className={styles.circle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fireflies;
