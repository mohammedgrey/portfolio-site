import { personalInfo } from "@/data/personalInfo";
import { socials } from "@/data/socials";
import { FC } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import LinkCard from "./components/LinkCard/LinkCard";
import styles from "./styles.module.scss";

const ContactPlatforms: FC = () => {
  const platforms = [
    ...socials.map((social) => ({
      ...social,
      copyText: social.link,
    })),
    {
      title: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      icon: MdEmail,
      copyText: personalInfo.email,
    },
    {
      title: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      icon: MdPhone,
      copyText: personalInfo.phone,
    },
  ];
  return (
    <div className={styles.partContainer}>
      <h2 className={styles.partTitle}>Reach me through</h2>
      {platforms.map((platform) => (
        <LinkCard
          key={platform.title}
          link={platform.link}
          Icon={platform.icon}
          title={platform.title}
          copyText={platform.copyText}
        />
      ))}
    </div>
  );
};

export default ContactPlatforms;
