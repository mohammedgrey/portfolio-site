import { FC } from "react";
import { IconBaseProps } from "react-icons";
import CopyButton from "./CopyButton";
import styles from "./styles.module.scss";

type Props = {
  Icon: FC<IconBaseProps>;
  title: string;
  link?: string;
  copyText?: string;
};

const LinkCard: FC<Props> = ({ Icon, link, title, copyText }) => {
  if (!link) return null;
  return (
    <div className={styles.cardContainer}>
      <a
        className={styles.card}
        title={title}
        target="blank"
        href={link}
        rel="noreferrer"
      >
        <Icon size={18} />
        {title}
      </a>

      <CopyButton copyText={copyText} />
    </div>
  );
};

export default LinkCard;
