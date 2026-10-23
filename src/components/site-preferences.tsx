"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { brandName } from "@/content/brand";
import type { Locale } from "@/content/homepage";

export type ThemePreference = "system" | "light" | "dark";

function isThemePreference(value: string): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

interface SitePreferences {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
}

const SitePreferencesContext = createContext<SitePreferences | null>(null);

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("ar");
  const [theme, setThemeState] = useState<ThemePreference>("system");

  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem("orbits-locale", nextLocale);
    setLocaleState(nextLocale);
  }, []);

  const setTheme = useCallback((nextTheme: ThemePreference) => {
    window.localStorage.setItem("orbits-theme", nextTheme);
    setThemeState(nextTheme);
  }, []);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("orbits-locale");
    const savedTheme = window.localStorage.getItem("orbits-theme");

    if (savedLocale === "ar" || savedLocale === "en") {
      setLocaleState(savedLocale);
    }
    if (savedTheme && isThemePreference(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === "orbits-locale" && (event.newValue === "ar" || event.newValue === "en")) setLocaleState(event.newValue);
      if (event.key === "orbits-theme" && event.newValue && isThemePreference(event.newValue)) setThemeState(event.newValue);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    const ar = locale === "ar";
    const section = pathname.startsWith("/build") ? ar ? "بيلد" : "Build"
      : pathname.startsWith("/workspace/builds") ? ar ? "مشاريعي" : "My Builds"
      : pathname.startsWith("/workspace") ? ar ? "مساحة العمل" : "Workspace"
      : pathname.startsWith("/auth") ? ar ? "الحساب" : "Account"
      : pathname.startsWith("/visibility") ? ar ? "الظهور الرقمي" : "Visibility"
      : pathname.startsWith("/plans") ? ar ? "الخطط" : "Plans"
      : pathname.startsWith("/start") ? ar ? "ابدأ مدارك" : "Start your orbit"
      : pathname.startsWith("/resources") ? ar ? "الموارد" : "Resources"
      : pathname.startsWith("/information") ? ar ? "معلومات الموقع" : "Site information"
      : ar ? "الرؤية الرقمية" : "Digital Visibility Intelligence";
    document.title = `${brandName[locale]} — ${section}`;
  }, [locale, pathname]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const resolvedTheme =
        theme === "system" ? (media.matches ? "dark" : "light") : theme;
      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.dataset.themePreference = theme;
    };

    applyTheme();
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  const value = useMemo(
    () => ({ locale, setLocale, theme, setTheme }),
    [locale, setLocale, theme, setTheme],
  );

  return (
    <SitePreferencesContext.Provider value={value}>
      {children}
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const value = useContext(SitePreferencesContext);
  if (!value) {
    throw new Error(
      "useSitePreferences must be used inside SitePreferencesProvider",
    );
  }
  return value;
}
