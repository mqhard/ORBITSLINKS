"use client";

import { useEffect, useState } from "react";
import { homepageContent } from "@/content/homepage";
import { useSitePreferences } from "@/components/site-preferences";

export function PublicHeader() {
  const { locale, setLocale, theme, setTheme } = useSitePreferences();
  const content = homepageContent[locale];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={content.siteName}>
          <span className="wordmark-mark" aria-hidden="true"><i /><i /></span>
          <span>{content.siteName}</span>
        </a>

        <nav className="desktop-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
          {content.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <div className="header-controls">
          <button className="locale-button" type="button" onClick={() => setLocale(locale === "ar" ? "en" : "ar")}>
            {content.language}
          </button>
          <label className="theme-control">
            <span>{content.themeLabel}</span>
            <select
              value={theme}
              onChange={(event) => {
                const nextTheme = event.target.value;
                if (nextTheme === "system" || nextTheme === "light" || nextTheme === "dark") setTheme(nextTheme);
              }}
              aria-label={content.themeLabel}
            >
              <option value="system">{content.themeOptions.system}</option>
              <option value="light">{content.themeOptions.light}</option>
              <option value="dark">{content.themeOptions.dark}</option>
            </select>
          </label>
          <a className="header-login" href="#final-cta">{content.login}</a>
          <a className="header-cta" href="#domain-form">{content.start}<span aria-hidden="true">↗</span></a>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
            <span>{menuOpen ? content.close : content.menu}</span><i aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <nav aria-label={locale === "ar" ? "قائمة الجوال" : "Mobile navigation"}>
          {content.nav.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}<b aria-hidden="true">↗</b>
            </a>
          ))}
        </nav>
        <div className="mobile-actions">
          <a href="#final-cta" onClick={() => setMenuOpen(false)}>{content.login}</a>
          <a href="#domain-form" onClick={() => setMenuOpen(false)}>{content.start}</a>
        </div>
      </div>
    </>
  );
}
