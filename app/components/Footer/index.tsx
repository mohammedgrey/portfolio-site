import { FC } from "react";
import styles from "./styles.module.scss";
import { personalInfo } from "@/data/personalInfo";
import { socials } from "@/data/socials";
import { MdEmail, MdPhone } from "react-icons/md";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
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
            <a
              href={social.link}
              key={social.title}
              title={social.title}
              target="_blank"
              rel="noreferrer"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
