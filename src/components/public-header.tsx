"use client";

import { BrandLogo } from "@/components/brand-logo";

import { useEffect, useRef, useState } from "react";
import { homepageContent } from "@/content/homepage";
import { useSitePreferences } from "@/components/site-preferences";
import { orbitModules } from "@/content/workspace";
import { publicNavigation, headerActions, solutionNavigation } from "@/content/navigation";
import styles from "./public-header.module.css";

// Presentation state only. Pass a verified session here when the auth service is connected.
// This flag controls navigation and must never be used as an authorization boundary.
export function PublicHeader({ authenticated = false }: { authenticated?: boolean }) {
  const { locale, setLocale, theme, setTheme } = useSitePreferences();
  const content = homepageContent[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const soon = locale === "ar" ? "قريبًا" : "Coming soon";

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1381px)");
    const onResize = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (menuOpen) { setMenuOpen(false); triggerRef.current?.focus(); }
        headerRef.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(detail => {
          detail.open = false;
          detail.querySelector("summary")?.focus();
        });
      }
      if (menuOpen && event.key === "Tab") {
        const selector = 'a[href], button:not([disabled]), select, summary';
        const items = [
          ...Array.from(headerRef.current?.querySelectorAll<HTMLElement>(selector) ?? []),
          ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>(selector) ?? []),
        ].filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== "hidden");
        const index = items.indexOf(document.activeElement as HTMLElement);
        if (index < 0 || (!event.shiftKey && index === items.length - 1) || (event.shiftKey && index === 0)) {
          event.preventDefault();
          items[event.shiftKey ? items.length - 1 : 0]?.focus();
        }
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        headerRef.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(detail => { detail.open = false; });
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [menuOpen]);

  const accountActions = <>
    <a className={styles.workspace} href={authenticated ? headerActions.workspace.href : headerActions.login.href} onClick={() => setMenuOpen(false)}>{authenticated ? headerActions.workspace.label[locale] : headerActions.login.label[locale]}</a>
    {!authenticated && <a className={`header-cta ${styles.start}`} href={headerActions.start.href} onClick={() => setMenuOpen(false)}>{headerActions.start.label[locale]}<span aria-hidden="true">↗</span></a>}
  </>;

  return (
    <>
      <a className="skip-link" href="#main-content">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>
      <header className={`site-header ${styles.header}`} ref={headerRef}>
        <a className="wordmark" href="/" aria-label={content.siteName}>
          <BrandLogo />
          <span>{content.siteName}</span>
        </a>

        <nav className="desktop-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
          {publicNavigation.map(item => item.pending ? (
            <button className={styles.pending} type="button" disabled data-target-route={item.href} title={soon} key={item.id}>{item.label[locale]}<small>{soon}</small></button>
          ) : item.menu ? (
            <details className="mega-menu" name="primary-navigation" key={item.id}>
              <summary>{item.label[locale]} <span aria-hidden="true">⌄</span></summary>
              {item.menu === "platform" ? <div className="mega-panel"><div className="mega-intro"><span>CONNECTED BY DESIGN</span><h2>{locale === "ar" ? "عشرة مدارات. رؤية واحدة." : "Ten orbits. One clear view."}</h2><a href="/workspace/home/">{locale === "ar" ? "استكشف المساحة" : "Explore workspace"} ↗</a></div><div className="mega-links">{orbitModules.map(m => <a href={`/workspace/${m.id}/`} key={m.id}><b>{m.symbol}</b>{m.name[locale]}<span>↗</span></a>)}</div></div>
                : <div className="mega-panel compact-mega">{solutionNavigation.map(link => <a href={link.href} key={link.href}>{link.label[locale]} ↗</a>)}</div>}
            </details>
          ) : <a key={item.id} href={item.href}>{item.label[locale]}</a>)}
        </nav>

        <div className="header-controls">
          <button className="locale-button" type="button" lang={locale === "ar" ? "en" : "ar"} onClick={() => setLocale(locale === "ar" ? "en" : "ar")}>
            {locale === "ar" ? "English" : "العربية"}
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
          <div className={styles.desktopActions}>{accountActions}</div>
          <button ref={triggerRef} className="menu-button" type="button" aria-label={menuOpen ? content.close : content.menu} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
            <i aria-hidden="true" />
          </button>
        </div>
      </header>

      <div ref={menuRef} className={`mobile-menu ${styles.mobileMenu}${menuOpen ? " is-open" : ""}`} id="mobile-menu" aria-hidden={!menuOpen} inert={!menuOpen}>
        <nav aria-label={locale === "ar" ? "قائمة الجوال" : "Mobile navigation"}>
          {publicNavigation.map((item, index) => {
            const contents = <><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className={styles.label}>{item.label[locale]}</span>{item.pending ? <small>{soon}</small> : <b aria-hidden="true">↗</b>}</>;
            return item.pending
              ? <button key={item.id} type="button" disabled data-target-route={item.href}>{contents}</button>
              : <a key={item.id} href={item.href} onClick={() => setMenuOpen(false)}>{contents}</a>;
          })}
        </nav>
        <div className={styles.mobileActions}>{accountActions}</div>
      </div>
    </>
  );
}
