"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useSitePreferences } from "@/components/site-preferences";
import { homepageContent } from "@/content/homepage";
import { OrbitMotion, OrbitGraphic } from "./orbit-motion";
import { ProductVisual } from "./product-visual";

export function HomepageSections() {
  const { locale } = useSitePreferences();
  const content = homepageContent[locale];
  const [activePlatform, setActivePlatform] = useState(0);
  const [openSolutions, setOpenSolutions] = useState<number[]>([0]);
  const [activeMetric, setActiveMetric] = useState(0);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const solutionModules = ["home", "seo", "ai", "market", "content", "local", "ads", "pr", "social"];
  const moveTrack = (ref: React.RefObject<HTMLDivElement | null>, direction: number) => ref.current?.scrollBy({ left: direction * (locale === "ar" ? -1 : 1) * 440, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });

  function toggleSolution(index: number) {
    setOpenSolutions((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  }

  return (
    <>
      <section className="section platform-section" id="platform" aria-labelledby="platform-title">
        <div className="section-heading">
          <p className="section-eyebrow">{content.platform.eyebrow}</p>
          <h2 id="platform-title">{content.platform.title}</h2>
        </div>
        <OrbitMotion className="platform-motion"><div className="platform-grid">
          {content.platform.cards.map((card, index) => (
            <article className={`platform-card${activePlatform === index ? " is-active" : ""}`} key={card.label} onMouseEnter={() => setActivePlatform(index)}>
              <button className="platform-card-trigger" type="button" onClick={() => setActivePlatform(index)} aria-pressed={activePlatform === index}>
                <span>{card.label}</span><b>0{index + 1}</b>
              </button>
              <div className="platform-visual">
                <Image src={card.image} alt="" fill sizes="(max-width: 800px) 100vw, 65vw" priority={index === 0} />
              </div>
              <div className="platform-copy">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <a className="text-link" href={index === 0 ? "/workspace/home/" : "/workspace/automations/"}>{card.cta}</a>
              </div>
            </article>
          ))}
        </div></OrbitMotion>
      </section>

      <section className="audience-band" aria-label={content.audience.label}>
        <p>{content.audience.label}</p>
        <div className="marquee"><div>{[...content.audience.items, ...content.audience.items].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>
      </section>

      <section className="section enterprise-section" aria-labelledby="enterprise-title">
        <div className="enterprise-card">
          <div className="enterprise-visual">
            <Image src="/images/orbits-enterprise.png" alt="" fill sizes="(max-width: 800px) 100vw, 58vw" />
          </div>
          <div className="enterprise-copy">
            <p className="section-eyebrow">{content.enterprise.eyebrow}</p>
            <h2 id="enterprise-title">{content.enterprise.title}</h2>
            <p>{content.enterprise.body}</p>
            <a className="light-button" href="/information/enterprise/">{content.enterprise.cta}</a>
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions" aria-labelledby="solutions-title">
        <div className="section-heading split-heading">
          <div><p className="section-eyebrow">{content.solutions.eyebrow}</p><h2 id="solutions-title">{content.solutions.title}</h2></div>
          <p>{content.solutions.intro}</p>
        </div>
        <div className="carousel-controls"><button aria-label={locale === "ar" ? "الحلول السابقة" : "Previous solutions"} onClick={() => moveTrack(solutionsRef, -1)}>{locale === "ar" ? "السابق" : "Previous"}</button><button aria-label={locale === "ar" ? "الحلول التالية" : "Next solutions"} onClick={() => moveTrack(solutionsRef, 1)}>{locale === "ar" ? "التالي" : "Next"}</button></div>
        <div className="solutions-list" ref={solutionsRef}>
          {content.solutions.items.map((item, index) => {
            const isOpen = openSolutions.includes(index);
            return (
              <article className={`solution-card solution-${index % 4}${isOpen ? " is-open" : ""}`} key={item[0]}>
                <button type="button" onClick={() => toggleSolution(index)} aria-expanded={isOpen}>
                  <span className="solution-number">0{index + 1}</span>
                  <span className="solution-label">{item[0]}</span>
                  <strong>{item[1]}</strong>
                  <span className="solution-toggle">{isOpen ? content.solutions.collapse : content.solutions.expand}<i aria-hidden="true">{isOpen ? "−" : "+"}</i></span>
                </button>
                <div className="solution-product"><ProductVisual variant={index} title={item[0]} /></div>
                <div className="solution-detail">
                  <div><p>{item[2]}</p><a className="text-link" href={`/workspace/${solutionModules[index]}/`}>{content.solutions.cta}</a></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section data-section" id="data" aria-labelledby="data-title">
        <div className="section-heading split-heading">
          <div><p className="section-eyebrow">{content.data.eyebrow}</p><h2 id="data-title">{content.data.title}</h2></div>
          <p>{content.data.note}</p>
        </div>
        <div className="metric-list">
          {content.data.items.map((item, index) => (
            <button className={activeMetric === index ? "is-active" : ""} type="button" key={item[0]} onClick={() => setActiveMetric(index)} aria-pressed={activeMetric === index}>
              <span>{item[0]}</span><strong>{item[1]}</strong><p>{item[2]}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="index-section" aria-labelledby="index-title">
        <div className="index-shell section">
          <div className="index-copy">
            <p className="section-eyebrow">{content.index.eyebrow}</p>
            <h2 id="index-title">{content.index.title}</h2>
            <p>{content.index.body}</p>
            <a className="light-button" href="/workspace/ai/">{content.index.cta}</a>
          </div>
          <div className="index-card" role="img" aria-label={locale === "ar" ? "بيانات افتراضية لمؤشر الرؤية" : "Fictional visibility index data"}>
            <div className="index-card-head"><span>{content.siteName} / {locale === "ar" ? "مؤشر الذكاء الاصطناعي" : "AI INDEX"}</span><span>{locale === "ar" ? "بيانات افتراضية" : "Fictional data"}</span></div>
            {content.index.rows.map((row, index) => (
              <div className="index-row" key={row[0]}>
                <span className="rank">0{index + 1}</span><strong>{row[0]}</strong><div><i style={{ width: `${row[1]}%` }} /></div><b>{row[1]}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section story-section" aria-labelledby="story-title">
        <div className="story-card">
          <div className="story-image"><Image src="/images/orbits-story.png" alt="" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="story-copy">
            <p className="section-eyebrow">{content.story.eyebrow}</p>
            <h2 id="story-title">{content.story.title}</h2>
            <blockquote>“{content.story.quote}”</blockquote>
            <p>{content.story.role}</p>
            <div className="story-metric"><strong>{content.story.metric}</strong><span>{content.story.metricLabel}</span></div>
          </div>
        </div>
      </section>

      <section className="section resources-section" id="resources" aria-labelledby="resources-title">
        <div className="section-heading split-heading">
          <div><p className="section-eyebrow">{content.resources.eyebrow}</p><h2 id="resources-title">{content.resources.title}</h2></div>
          <p>{content.resources.note}</p>
        </div>
        <div className="carousel-controls"><button aria-label={locale === "ar" ? "الموارد السابقة" : "Previous resources"} onClick={() => moveTrack(resourcesRef, -1)}>{locale === "ar" ? "السابق" : "Previous"}</button><button aria-label={locale === "ar" ? "الموارد التالية" : "Next resources"} onClick={() => moveTrack(resourcesRef, 1)}>{locale === "ar" ? "التالي" : "Next"}</button></div>
        <div className="resource-track" ref={resourcesRef}>
          {content.resources.items.map((item, index) => (
            <article className="resource-card" key={item[0]}>
              <div className={`resource-cover resource-cover-${index % 3}`}><span>{content.siteName} / {locale === "ar" ? "ملاحظات عملية" : "FIELD NOTES"}</span><b>{String(index + 1).padStart(2, "0")}</b><div className={`cover-glyph glyph-${index % 3}`}>{["◎", "↗", "✦"][index % 3]}</div><small>{item[1]}</small></div>
              <div className="resource-copy"><span>{item[1]}</span><h3>{item[0]}</h3><p>{item[2]}</p><a href={`/resources/${index + 1}/`} aria-label={`${locale === "ar" ? "اقرأ" : "Read"}: ${item[0]}`}>{locale === "ar" ? "اقرأ المقال" : "Read article"}</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section public-autopilot"><OrbitMotion className="autopilot-promo"><div><p className="section-eyebrow">{locale === "ar" ? "مدار الأتمتة" : "ORBIT AUTOPILOT"}</p><h2>{locale === "ar" ? "اسمنا مدار. وفعلنا اتصال." : "Orbits in name. Connected by action."}</h2><p>{locale === "ar" ? "أطلق سلسلة من الخطوات، راقب انتقال الإشارة، واستلم تقريرًا أو مسودة جاهزة للتطوير." : "Launch a connected workflow. Watch the signal move. Get a report or draft ready to develop."}</p><a href="/workspace/automations/" className="primary-button">{locale === "ar" ? "جرّب الأتمتة" : "Try Autopilot"}</a></div><OrbitGraphic compact /></OrbitMotion></section>
      <section className="section final-cta" id="final-cta" aria-labelledby="final-title">
        <div className="final-orbit" aria-hidden="true"><i /><i /><i /></div>
        <p className="section-eyebrow">{content.finalCta.eyebrow}</p>
        <h2 id="final-title">{content.finalCta.title}</h2>
        <p>{content.finalCta.body}</p>
        <a className="primary-button" href="/start/">{content.finalCta.cta}</a>
      </section>
    </>
  );
}
