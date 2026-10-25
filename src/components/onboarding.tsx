"use client";
import { brandName } from "@/content/brand";

import { BrandLogo } from "@/components/brand-logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSitePreferences } from "./site-preferences";
import { OrbitGraphic, OrbitMotion } from "./orbit-motion";
import { ProductVisual } from "./product-visual";
import { experienceOptions, goalOptions, roleOptions } from "@/content/workspace";
import { normalizeDomain, useOrbitState } from "@/lib/orbit-store";

export function Onboarding({ plansOnly = false }: { plansOnly?: boolean }) {
  const { locale, setLocale } = useSitePreferences(); const ar = locale === "ar";
  const { state, ready, update } = useOrbitState(); const router = useRouter();
  const [step, setStep] = useState(plansOnly ? 4 : 0); const [domain, setDomain] = useState(""); const [error, setError] = useState(false);
  const [plan, setPlan] = useState("Explorer");
  useEffect(() => { if (ready) { setDomain(state.profile.domain); setPlan(state.profile.plan); } }, [ready, state.profile.domain, state.profile.plan]);
  const titles = ar ? ["ما الموقع الذي سيدور حوله عملك؟", "ما الدور الأقرب إليك؟", "كيف تفضّل أن تبدأ؟", "ما المدارات التي تريد تنميتها؟", "اختر مدار انطلاقتك"] : ["What website will your work orbit?", "What best describes your role?", "How would you like to start?", "Which orbits would you like to grow?", "Choose your starting orbit"];
  const subtitles = ar ? ["أضف موقعك لتخصيص مساحة العمل التجريبية.", "نخصص نقطة البداية بحسب طبيعة عملك.", "تجربة تتوافق مع خبرتك في التسويق الرقمي.", "يمكن اختيار أكثر من هدف وتعديلها لاحقًا.", "خطط توضيحية لا تتطلب بطاقة أو تنشئ اشتراكًا."] : ["Add your website to personalize the demo workspace.", "Your role helps shape a useful starting point.", "A workspace that meets your experience level.", "Choose multiple goals. You can revisit these later.", "Illustrative plans. No card, payment, or subscription."];
  function next() {
    if (step === 0) { const clean = normalizeDomain(domain); if (!clean) { setError(true); return; } update(s => ({ ...s, profile: { ...s.profile, domain: clean } })); }
    setError(false); setStep(s => s + 1);
  }
  function finish() { update(s => ({ ...s, profile: { ...s.profile, plan } })); router.push("/workspace/home/"); }
  const canContinue = step === 1 ? state.profile.role >= 0 : step === 2 ? state.profile.experience >= 0 : step === 3 ? state.profile.goals.length > 0 : true;
  return <main className="onboarding-shell">
    <header className="journey-header"><Link href="/" className="wordmark"><BrandLogo />{brandName[locale]}</Link><button className="locale-button" onClick={() => setLocale(ar ? "en" : "ar")}>{ar ? "English" : "العربية"}</button><Link href="/workspace/home/">{ar ? "استكشف المساحة" : "Explore workspace"}</Link></header>
    <div className="journey-grid"><section className="journey-form" aria-labelledby="journey-title">
      <div className="journey-progress" aria-label={ar ? `الخطوة ${step + 1} من 5` : `Step ${step + 1} of 5`}>{titles.map((title, i) => <span className={i <= step ? "done" : ""} key={title} />)}<small>0{step + 1} / 05</small></div>
      <p className="section-eyebrow">{locale === "ar" ? "مدارك التالي" : "YOUR NEXT ORBIT"}</p><h1 id="journey-title">{titles[step]}</h1><p className="journey-description">{subtitles[step]}</p>
      <form onSubmit={e => { e.preventDefault(); step === 4 ? finish() : next(); }}>
        {step === 0 && <><label className="input-label" htmlFor="setup-domain">{ar ? "نطاق الموقع" : "Website domain"}</label><input id="setup-domain" className="orbit-input" dir="ltr" placeholder="yourwebsite.com" value={domain} onChange={e => { setDomain(e.target.value); setError(false); }} aria-invalid={error} aria-describedby={error ? "setup-error" : undefined} autoComplete="url" />{error && <p className="input-error" id="setup-error" role="alert">{ar ? "أدخل نطاقًا صحيحًا مثل example.com" : "Enter a valid domain, such as example.com"}</p>}</>}
        {(step === 1 || step === 2) && <fieldset className="choice-list"><legend className="sr-only">{titles[step]}</legend>{(step === 1 ? roleOptions : experienceOptions).map((option, i) => <label className={`choice ${(step === 1 ? state.profile.role : state.profile.experience) === i ? "selected" : ""}`} key={option.en}><input type="radio" name="profile-choice" checked={(step === 1 ? state.profile.role : state.profile.experience) === i} onChange={() => update(s => ({ ...s, profile: { ...s.profile, [step === 1 ? "role" : "experience"]: i } }))} /><span>{option[locale]}</span></label>)}</fieldset>}
        {step === 3 && <fieldset className="choice-list goals-grid"><legend className="sr-only">{titles[step]}</legend>{goalOptions.map((goal, i) => <label className={`choice ${state.profile.goals.includes(i) ? "selected" : ""}`} key={goal.en}><input type="checkbox" checked={state.profile.goals.includes(i)} onChange={() => update(s => ({ ...s, profile: { ...s.profile, goals: s.profile.goals.includes(i) ? s.profile.goals.filter(g => g !== i) : [...s.profile.goals, i] } }))} /><span>{goal[locale]}</span></label>)}</fieldset>}
        {step === 4 && <><div className="plan-grid">{["Explorer", "Growth", "Enterprise"].map((p, i) => <label className={`plan-card ${plan === p ? "selected" : ""}`} key={p}><input type="radio" name="plan" checked={plan === p} onChange={() => setPlan(p)} /><span>0{i + 1}</span><strong>{ar ? ["المستكشف", "النمو", "المؤسسات"][i] : p}</strong><small>{(ar ? ["اكتشف الأدوات", "اربط مدارات النمو", "نسّق عمل الفرق"] : ["Discover your tools", "Connect growth orbits", "Coordinate your teams"])[i]}</small><b>{ar ? "معاينة مجانية" : "Free demo"}</b></label>)}</div><ul className="plan-features">{(ar ? ["مساحة عمل بعشرة أقسام متصلة", "أتمتة تجريبية وتقارير قابلة للتنزيل", "حفظ التفضيلات والمحتوى على هذا الجهاز"] : ["Ten connected workspaces", "Demo automations and downloadable reports", "Preferences and content saved on this device"]).map(t => <li key={t}>✓ {t}</li>)}</ul></>}
        <div className="journey-buttons"><button className="primary-button" disabled={!ready || !canContinue} type="submit">{step === 4 ? ar ? "ادخل مساحة العمل" : "Enter workspace" : ar ? "متابعة" : "Continue"}</button>{step > 0 && !plansOnly && <button type="button" className="quiet-button" onClick={() => setStep(s => s - 1)}>{ar ? "السابق" : "Back"}</button>}</div>
        {step === 0 && <button type="button" className="skip-setup" onClick={() => { update(s => ({ ...s, profile: { ...s.profile, domain: "" } })); setStep(1); }}>{ar ? "ليس لدي موقع — استكشف بمشروع توضيحي" : "No website yet — explore a sample project"}</button>}
        {step === 4 && <Link className="skip-setup" href="/workspace/home/">{ar ? "تخطي اختيار الخطة" : "Skip plan selection"}</Link>}
      </form>
    </section><OrbitMotion className="journey-art"><span className="journey-art-label">{locale === "ar" ? "اتصل. تناغم. انمُ." : "CONNECT. ALIGN. GROW."}</span><OrbitGraphic /><div className="journey-preview"><ProductVisual variant={step} /><p>{ar ? "حين تتصل الإشارات، يبدأ الأثر." : "When signals connect, impact begins."}</p></div><span className="journey-art-foot">{brandName[locale]} / {locale === "ar" ? "الأساس" : "FOUNDATIONS"}</span></OrbitMotion></div>
  </main>;
}
