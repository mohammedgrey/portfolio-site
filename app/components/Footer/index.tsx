import { FC } from "react";
import styles from "./styles.module.scss";
import { personalInfo } from "@/data/personalInfo";
import { socials } from "@/data/socials";
import { MdEmail, MdPhone } from "react-icons/md";
import LinkIconButton from "../LinkIconButton/LinkIconButton";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p>
          <MdEmail />
          <a
            target="_blank"
            rel="noreferrer"
            href={`mailto:${personalInfo.email}`}
          >
            {personalInfo.email}
          </a>
        </p>
        <p>
          <MdPhone />
          <a
            target="_blank"
            rel="noreferrer"
            href={`tel:${personalInfo.phone}`}
          >
            {personalInfo.phone}
          </a>
        </p>
      </div>
      <div className={styles.socials}>
        {socials.map((social) => (
          <LinkIconButton
            key={social.title}
            link={social.link}
            Icon={social.icon}
            title={social.title}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
