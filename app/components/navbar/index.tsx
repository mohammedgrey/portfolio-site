import Link from "next/link";
import LanguageButton from "./languageButton";
import styles from "./styles.module.scss";
import ThemeButton from "./themeButton";

export default function Navbar() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <ThemeButton />
        <LanguageButton />
      </div>
      <ul className={styles.navItems}>
        {links.map(({ href, text }) => (
          <Link href={href} key={href}>
            <li className={styles.navItem}>{text}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
