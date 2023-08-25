import { persist } from "zustand/middleware";
import { create } from "zustand";
import { Locale, Theme } from "@/types";

type PreferencesStoreType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const usePreferencesStore = create<PreferencesStoreType>()(
  persist(
    (set, get) => ({
      locale: Locale.EN,
      setLocale: (locale) => set({ locale }),
      theme: Theme.LIGHT,
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
        })),
    }),
    {
      name: "preferences-storage",
    }
  )
);

export default usePreferencesStore;
