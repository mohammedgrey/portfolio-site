import ContactForm from "./components/ContactForm";
import ContactPlatforms from "./components/ContactPlatforms";
import styles from "./styles.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <ContactPlatforms />
      <ContactForm />
    </div>
  );
};

export default Contact;
