"use client";

import { homepageContent } from "@/content/homepage";
import { useSitePreferences } from "@/components/site-preferences";

export function SiteFooter() {
  const { locale, setLocale } = useSitePreferences();
  const content = homepageContent[locale];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href="#top"><span className="wordmark-mark"><i /><i /></span>ORBITS LINKS</a>
        <p>{content.footer.summary}</p>
      </div>
      <div className="footer-groups">
        {content.footer.groups.map((group) => (
          <details key={group[0]} open>
            <summary>{group[0]}<span aria-hidden="true">+</span></summary>
            <ul>{group.slice(1).map((item) => <li key={item}><a href="#domain-form">{item}</a></li>)}</ul>
          </details>
        ))}
      </div>
      <div className="footer-bottom">
        <p>{content.footer.copyright}</p>
        <div><a href="#top">LinkedIn</a><a href="#top">X</a><a href="#top">YouTube</a></div>
        <button type="button" onClick={() => setLocale(locale === "ar" ? "en" : "ar")}>{content.language}</button>
      </div>
    </footer>
  );
}
