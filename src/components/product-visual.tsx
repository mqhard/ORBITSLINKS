"use client";
import { useSitePreferences } from "./site-preferences";
export function ProductVisual({ variant = 0, title }: { variant?: number; title?: string }) {
  const { locale } = useSitePreferences();
  return <div className={`product-preview preview-${variant % 4}`}><div className="preview-chrome"><span>ORBITS / {title || ["VISIBILITY", "SITE HEALTH", "MARKET", "CONTENT"][variant % 4]}</span><i /><i /><i /></div>
    {variant % 4 === 0 ? <><div className="preview-value">84.6<span>↗ 18.2%</span></div><svg viewBox="0 0 320 130" role="img" aria-label={locale === "ar" ? "منحنى نمو توضيحي" : "Illustrative growth chart"}><path className="chart-grid" d="M0 30H320M0 65H320M0 100H320"/><path className="chart-line" d="M0 108L32 90L64 98L96 65L128 74L160 48L192 54L224 20L256 32L288 12L320 5"/><path className="chart-secondary" d="M0 120L40 105L80 112L120 90L160 95L200 64L240 70L280 48L320 40"/></svg></>
    : variant % 4 === 1 ? <div className="preview-health"><div className="health-ring"><strong>86<span>/ 100</span></strong></div><div>{["PERFORMANCE", "DISCOVERY", "STRUCTURE"].map((label, i) => <p key={label}>{label}<b>{[92, 78, 88][i]}%</b><i style={{ width: `${[92, 78, 88][i]}%` }} /></p>)}</div></div>
    : variant % 4 === 2 ? <div className="preview-bars">{[35, 58, 48, 76, 62, 90, 80].map((height, i) => <div key={i}><i style={{ height: `${height}%` }} /><span>0{i + 1}</span></div>)}</div>
    : <div className="preview-editor"><span>CONTENT ORBIT</span><strong>{locale === "ar" ? "من فكرة إلى أثر" : "From idea to impact"}</strong><i /><i /><i /><div><b>SEO 92</b><b>AI READY</b></div></div>}
    <div className="preview-caption"><span className="status-dot" />{locale === "ar" ? "معاينة ببيانات محاكاة" : "Simulated data preview"}</div></div>;
}
