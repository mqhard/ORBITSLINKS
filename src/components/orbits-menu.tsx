"use client";

import { useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { useSitePreferences } from "./site-preferences";
import { headerActions } from "@/content/navigation";
import styles from "./orbits-menu.module.css";

type IconName = "user" | "plus" | "globe" | "moon" | "sun" | "arrow";
function MenuIcon({ name, className }: { name: IconName; className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {name === "user" && <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2" /></>}
    {name === "plus" && <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>}
    {name === "globe" && <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>}
    {name === "moon" && <path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z" />}
    {name === "sun" && <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>}
    {name === "arrow" && <path d="M5 12h14m-5-5 5 5-5 5" />}
  </svg>;
}

type OrbitsMenuProps = { open: boolean; onOpenChange: (open: boolean) => void; authenticated: boolean };

export function OrbitsMenu({ open, onOpenChange, authenticated }: OrbitsMenuProps) {
  const { locale, setLocale, setTheme } = useSitePreferences();
  const ar = locale === "ar";
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Observe the existing provider's resolved theme, including system preference changes.
    const root = document.documentElement;
    const update = () => setDark(root.dataset.theme === "dark");
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const outside = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) onOpenChange(false);
    };
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", outside);
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", outside);
      document.removeEventListener("keydown", keydown);
    };
  }, [open, onOpenChange]);

  return <div className={styles.root} ref={rootRef}>
    <button className={styles.trigger} type="button" ref={buttonRef} aria-label={ar ? "فتح قائمة اوربيتس لينكس" : "Open ORBITS menu"} aria-expanded={open} aria-controls={id} onClick={() => onOpenChange(!open)}>
      <BrandLogo className={styles.mark} />
    </button>
    <div className={styles.panel} id={id} ref={panelRef} hidden={!open} role="region" aria-labelledby={`${id}-title`}>
      <p className={styles.title} id={`${id}-title`}>{ar ? "مساحتك في اوربيتس لينكس" : "Your space on ORBITS"}</p>
      <div className={styles.accounts}>
        {authenticated ? <a href={headerActions.workspace.href} onClick={() => onOpenChange(false)}><MenuIcon name="user" /><span>{headerActions.workspace.label[locale]}</span><MenuIcon name="arrow" className={styles.arrow} /></a> : <>
          <a href={headerActions.login.href} onClick={() => onOpenChange(false)}><MenuIcon name="user" /><span>{ar ? "تسجيل الدخول" : "Log in"}</span><MenuIcon name="arrow" className={styles.arrow} /></a>
          <a href={headerActions.start.href} onClick={() => onOpenChange(false)}><MenuIcon name="plus" /><span>{ar ? "إنشاء حساب" : "Create an account"}</span><MenuIcon name="arrow" className={styles.arrow} /></a>
        </>}
      </div>
      <div className={styles.preferences}>
        <button type="button" onClick={() => setLocale(ar ? "en" : "ar")} aria-label={ar ? "التبديل إلى English" : "Switch to العربية"}><MenuIcon name="globe" /><span lang={ar ? "en" : "ar"}>{ar ? "English" : "العربية"}</span></button>
        <button type="button" onClick={() => setTheme(dark ? "light" : "dark")}><MenuIcon name={dark ? "sun" : "moon"} /><span>{dark ? (ar ? "المظهر الفاتح" : "Light appearance") : (ar ? "المظهر الداكن" : "Dark appearance")}</span></button>
      </div>
    </div>
  </div>;
}
