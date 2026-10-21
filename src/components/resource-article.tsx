"use client";
import { homepageContent } from "@/content/homepage";
import { fieldNotes } from "@/content/field-notes";
import { useSitePreferences } from "./site-preferences";
import { PublicHeader } from "./public-header";
import { SiteFooter } from "./site-footer";
export function ResourceArticle({ index }: { index: number }) {
  const { locale } = useSitePreferences(); const ar = locale === "ar"; const item = homepageContent[locale].resources.items[index]; const note = fieldNotes[index];
  return <><PublicHeader /><main className="article-page"><a className="text-link" href="/#resources">{ar ? "↗ جميع الموارد" : "↗ All resources"}</a><p className="section-eyebrow">FIELD NOTES / {String(index + 1).padStart(2, "0")}</p><h1>{item[0]}</h1><p className="article-lead">{item[2]}</p><div className={`resource-cover resource-cover-${index % 3}`}><span>ORBITS / {item[1]}</span><b>{String(index + 1).padStart(2, "0")}</b><div className="cover-glyph">{["◎", "↗", "✦"][index % 3]}</div></div>{[0, 2, 4].map((offset, i) => <section key={offset}><span className="section-eyebrow">0{i + 1}</span><h2>{note[locale][offset]}</h2><p>{note[locale][offset + 1]}</p></section>)}<a className="primary-button" href={`/workspace/${note.module}/`}>{ar ? "جرّب الخطوة داخل المنصة" : "Try it in your workspace"} ↗</a></main><SiteFooter /></>;
}
