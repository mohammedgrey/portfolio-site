import { FC } from "react";
import styles from "./styles.module.scss";
import { IconBaseProps } from "react-icons";

type Props = {
  title: string;
  link?: string;
  color?: string;
  Icon?: FC<IconBaseProps>;
};

const ButtonLink: FC<Props> = ({ link, title, color = "#333333", Icon }) => {
  if (!link) return null;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkButton}
      style={{ backgroundColor: color }}
      href={link}
    >
      {Icon ? <Icon /> : null}
      {title}
    </a>
  );
};

export default ButtonLink;
