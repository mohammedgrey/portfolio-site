import usePreferencesStore from "@/stores/usePreferencesStore";
import { Theme } from "@/types";
import { useEffect } from "react";

const useTheme = () => {
  const { theme, setTheme, toggleTheme } = usePreferencesStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
