import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const StickyNote: FC<Props> = ({ children }) => {
  return <div className={styles.stickyNote}>{children}</div>;
};

export default StickyNote;
