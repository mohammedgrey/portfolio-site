import usePreferencesStore from "@/stores/usePreferencesStore";
import { Theme } from "@/types/common";
import { useEffect } from "react";

const useTheme = () => {
  const {
    theme,
    setTheme,
    // checkedThemePreference,
    // setCheckedThemePreference,
    toggleTheme,
  } = usePreferencesStore();

  // useEffect(() => {
  //   if (checkedThemePreference) return;

  //   // check if user prefers dark mode in their OS
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     setTheme(Theme.DARK);
  //   }
  //   setCheckedThemePreference(true);
  // }, [checkedThemePreference, setTheme, setCheckedThemePreference]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
