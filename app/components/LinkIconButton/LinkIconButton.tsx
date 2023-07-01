import { FC } from "react";
import styles from "./styles.module.scss";
import { IconBaseProps } from "react-icons";

type Props = {
  Icon: FC<IconBaseProps>;
  title: string;
  link?: string;
};

const LinkIconButton: FC<Props> = ({ Icon, link, title }) => {
  if (!link) return null;
  return (
    <a title={title} target="blank" href={link} rel="noreferrer">
      <button className={styles.iconButton}>
        <Icon size={18} />
      </button>
    </a>
  );
};

export default LinkIconButton;
