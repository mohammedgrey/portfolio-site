import { IconType } from "react-icons";

export enum Locale {
  EN = "en",
  AR = "ar",
}

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export type SocialType = {
  title: string;
  link: string;
  icon: IconType;
};
