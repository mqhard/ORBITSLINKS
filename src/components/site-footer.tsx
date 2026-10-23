"use client";

import { BrandLogo } from "@/components/brand-logo";

import { contactEmail, footerContent, socialLinks } from "@/content/footer";
import { homepageContent } from "@/content/homepage";
import { useSitePreferences } from "@/components/site-preferences";

export function SiteFooter() {
  const { locale, setLocale } = useSitePreferences();
  const content = homepageContent[locale];
  const copy = footerContent[locale];
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(copy.body)}`;
  const links = [["/workspace/home/", "/workspace/ai/", "/workspace/seo/#audit", "/workspace/reports/"], ["/workspace/seo/", "/workspace/market/", "/workspace/content/", "/workspace/pr/"], ["/resources/1/", "/resources/2/", "/workspace/home/", "/resources/7/"], ["/information/about/", "/information/enterprise/", "/information/privacy/", "/information/terms/"]];

  return (
    <footer className="site-footer">
      <section className="footer-contact" aria-labelledby="footer-contact-title">
        <div>
          <p className="footer-eyebrow">{copy.eyebrow}</p>
          <h2 id="footer-contact-title">{copy.title}</h2>
          <p className="footer-contact-description">{copy.description}</p>
        </div>
        <div className="footer-contact-actions">
          <a className="primary-button" href={emailHref} aria-describedby="footer-email-hint">{copy.contact}<span aria-hidden="true">↗</span></a>
          <p id="footer-email-hint">{copy.emailHint}</p>
          <a className="footer-build-link" href="/build/">{copy.explore}<span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span></a>
        </div>
      </section>
      <div className="footer-top">
        <div className="footer-identity">
          <a className="footer-brand" href="/" aria-label={`${content.siteName} — ${copy.home}`}><BrandLogo />{content.siteName}</a>
          <p>{content.footer.summary}</p>
          <a className="footer-email" href={`mailto:${contactEmail}`} dir="ltr">{contactEmail}</a>
        </div>
        <div className="footer-social">
          <h3>{copy.follow}</h3>
          <p>{copy.followDescription}</p>
          <nav aria-label={copy.socialLabel}>
            {socialLinks.map(({ name, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} — ${copy.external}`}>
                <span lang="en" dir="ltr">{name}</span><span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>
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
        <div><a href="/workspace/automations/">{locale === "ar" ? "الأتمتة ↗" : "Autopilot \u2197"}</a><a href="/information/privacy/">{locale === "ar" ? "الخصوصية" : "Privacy"}</a></div>
        <button type="button" onClick={() => setLocale(locale === "ar" ? "en" : "ar")}>{content.language}</button>
      </div>
    </footer>
  );
}
