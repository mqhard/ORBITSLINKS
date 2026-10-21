"use client";

import { useEffect, useState } from "react";
import { homepageContent } from "@/content/homepage";
import { useSitePreferences } from "@/components/site-preferences";
import { orbitModules } from "@/content/workspace";

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
        <a className="wordmark" href="/" aria-label={content.siteName}>
          <span className="wordmark-mark" aria-hidden="true"><i /><i /></span>
          <span>{content.siteName}</span>
        </a>

        <nav className="desktop-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
          <details className="mega-menu" name="primary-navigation"><summary>{locale === "ar" ? "المنصة" : "Platform"} ⌄</summary><div className="mega-panel"><div className="mega-intro"><span>CONNECTED BY DESIGN</span><h2>{locale === "ar" ? "عشرة مدارات. رؤية واحدة." : "Ten orbits. One clear view."}</h2><a href="/workspace/home/">{locale === "ar" ? "استكشف المساحة" : "Explore workspace"} ↗</a></div><div className="mega-links">{orbitModules.map(m => <a href={`/workspace/${m.id}/`} key={m.id}><b>{m.symbol}</b>{m.name[locale]}<span>↗</span></a>)}</div></div></details>
          <a href="/plans/">{locale === "ar" ? "الخطط" : "Plans"}</a>
          <details className="mega-menu" name="primary-navigation"><summary>{locale === "ar" ? "الحلول" : "Solutions"} ⌄</summary><div className="mega-panel compact-mega"><a href="/workspace/seo/">{locale === "ar" ? "نمِّ حضورك في البحث" : "Grow search visibility"} ↗</a><a href="/workspace/ai/">{locale === "ar" ? "كن جزءًا من إجابات AI" : "Be part of AI answers"} ↗</a><a href="/workspace/automations/">{locale === "ar" ? "أتمت مسار النمو" : "Automate your growth workflow"} ↗</a><a href="/workspace/content/">{locale === "ar" ? "من الفكرة إلى المحتوى" : "From idea to content"} ↗</a></div></details>
          <a href="/#resources">{locale === "ar" ? "الموارد" : "Resources"}</a>
          <a href="/information/enterprise/">{locale === "ar" ? "للمؤسسات" : "Enterprise"} ↗</a>
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
          <a className="header-login" href="/workspace/home/">{locale === "ar" ? "مساحة العمل" : "Workspace"}</a>
          <a className="header-cta" href="/start/">{content.start}<span aria-hidden="true">↗</span></a>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
            <span>{menuOpen ? content.close : content.menu}</span><i aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <nav aria-label={locale === "ar" ? "قائمة الجوال" : "Mobile navigation"}>
          {content.nav.map((item, index) => (
            <a key={item.href} href={item.href.startsWith("#") ? `/${item.href}` : item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}<b aria-hidden="true">↗</b>
            </a>
          ))}
          <a href="/plans/">{locale === "ar" ? "الخطط" : "Plans"} ↗</a>
          <a href="/workspace/automations/">{locale === "ar" ? "الأتمتة" : "Autopilot"} ↗</a>
        </nav>
        <div className="mobile-actions">
          <a href="/workspace/home/" onClick={() => setMenuOpen(false)}>{locale === "ar" ? "مساحة العمل" : "Workspace"}</a>
          <a href="/start/" onClick={() => setMenuOpen(false)}>{content.start}</a>
        </div>
      </div>
    </>
  );
}
