"use client";
import useTheme from "@/hooks/useTheme";
import styles from "../styles.module.scss";
import { CiDark } from "react-icons/ci";
import { Theme } from "@/types";
import { MdLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === Theme.DARK ? MdLightMode : CiDark;
  return <Icon onClick={toggleTheme} className={styles.navIcon} />;
}
