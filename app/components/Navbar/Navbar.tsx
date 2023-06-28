"use client";
import { classNames } from "@/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./components/MobileMenu";
import ThemeButton from "./components/ThemeButton";
import styles from "./styles.module.scss";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <ThemeButton />
      </div>
      {
        //in large screens (laptops and tablets)
        <ul className={classNames(styles.navItems, styles.navLinks)}>
          {links.map(({ href, text }) => (
            <Link href={href} key={href}>
              <li
                className={styles.navItem}
                style={{
                  boxShadow:
                    href === pathname ? "var(--common-shadow)" : "none",
                }}
              >
                {text}
              </li>
            </Link>
          ))}
        </ul>
      }

      {
        //in small screens (mobiles)
        <div className={styles.mobileMenu}>
          <MobileMenu links={links} />
        </div>
      }
    </nav>
  );
}
