"use client";

import { homepageContent } from "@/content/homepage";
import { useSitePreferences } from "@/components/site-preferences";

export function SiteFooter() {
  const { locale, setLocale } = useSitePreferences();
  const content = homepageContent[locale];
  const links = [["/workspace/home/", "/workspace/ai/", "/workspace/seo/#audit", "/workspace/reports/"], ["/workspace/seo/", "/workspace/market/", "/workspace/content/", "/workspace/pr/"], ["/resources/1/", "/resources/2/", "/workspace/home/", "/resources/7/"], ["/information/about/", "/information/enterprise/", "/information/privacy/", "/information/terms/"]];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href="#top"><span className="wordmark-mark"><i /><i /></span>ORBITS LINKS</a>
        <p>{content.footer.summary}</p>
      </div>
      <div className="footer-groups">
        {content.footer.groups.map((group, groupIndex) => (
          <details key={group[0]} open>
            <summary>{group[0]}<span aria-hidden="true">+</span></summary>
            <ul>{group.slice(1).map((item, index) => <li key={item}><a href={links[groupIndex][index]}>{groupIndex === 3 && index === 1 ? locale === "ar" ? "للمؤسسات" : "Enterprise" : item}</a></li>)}</ul>
          </details>
        ))}
      </div>
      <div className="footer-bottom">
        <p>{content.footer.copyright}</p>
        <div><a href="/workspace/automations/">Autopilot ↗</a><a href="/information/privacy/">{locale === "ar" ? "الخصوصية" : "Privacy"}</a></div>
        <button type="button" onClick={() => setLocale(locale === "ar" ? "en" : "ar")}>{content.language}</button>
      </div>
      <div className="footer-signature" aria-hidden="true">ORBITS<span>LINKS</span></div>
    </footer>
  );
}
