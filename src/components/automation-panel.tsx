"use client";
import { useEffect, useRef, useState } from "react";
import { recipes } from "@/content/workspace";
import { saveOrbitState, useOrbitState } from "@/lib/orbit-store";
import { useSitePreferences } from "./site-preferences";
import { OrbitGraphic, OrbitMotion } from "./orbit-motion";

export function AutomationPanel() {
  const { locale } = useSitePreferences(); const ar = locale === "ar"; const { state, update } = useOrbitState();
  const [running, setRunning] = useState<string | null>(null); const [stage, setStage] = useState(0); const [notice, setNotice] = useState("");
  const lock = useRef(false); const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const runRef = useRef<(id: string) => void>(() => {});
  function run(id: string) {
    if (lock.current) return;
    lock.current = true; setRunning(id); setStage(0); setNotice("");
    const recipe = recipes.find(r => r.id === id)!;
    timers.current = [1, 2, 3].map(i => setTimeout(() => {
      setStage(i);
      if (i === 3) {
        const at = new Date().toISOString();
        saveOrbitState(s => ({ ...s, runs: [{ id: crypto.randomUUID(), recipe: id, domain: s.profile.domain || "demo.orbits.example", at, summary: id === "health" ? "12 pages · 3 priorities · health 86/100" : id === "visibility" ? "24 prompts · visibility 68% · 3 opportunities" : "1 content brief · 1 saved draft" }, ...s.runs].slice(0, 40), drafts: id === "content" ? [{ id: crypto.randomUUID(), title: ar ? "كيف تبني حضورًا رقميًا متصلًا؟" : "How to build a connected digital presence", body: ar ? "موجز تجريبي\nالجمهور: فرق النمو\nالهدف: توضيح العلاقة بين البحث والمحتوى والذكاء الاصطناعي.\nالمقدمة: تبدأ الرؤية بفهم الأسئلة التي يطرحها جمهورك.\nالمحاور: اكتشاف الطلب، بناء المحتوى، قياس الظهور.\nالخطوة التالية: مراجعة المصادر وإضافة أمثلة موثقة قبل النشر." : "Demo brief\nAudience: growth teams\nGoal: connect search, content and AI discovery.\nIntroduction: visibility starts with the questions your audience asks.\nSections: discover demand, build content, measure visibility.\nNext: verify sources and add documented examples before publishing.", category: "content", at }, ...s.drafts] : s.drafts }));
        setRunning(null); lock.current = false; setNotice(ar ? `اكتمل ${recipe.name.ar} وحُفظت النتيجة في سجل التشغيل.` : `${recipe.name.en} completed. Results saved to the run log.`);
      }
    }, i * 700));
  }
  runRef.current = run;
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      const enabled = recipes.filter(r => state.schedules[r.id]);
      if (enabled.length) runRef.current(enabled[Math.floor(Date.now() / 60000) % enabled.length].id);
    }, 60000);
    return () => clearInterval(interval);
  }, [state.schedules]);
  function cancel() { timers.current.forEach(clearTimeout); setRunning(null); lock.current = false; setNotice(ar ? "أُلغي التشغيل قبل حفظ النتائج." : "Run cancelled before saving results."); }
  return <><OrbitMotion className="automation-banner"><div><p className="section-eyebrow">{locale === "ar" ? "مدار الأتمتة" : "ORBIT AUTOPILOT"}</p><h2>{ar ? "أطلق المسار. تابع الأثر." : "Launch the workflow. Follow the impact."}</h2><p>{ar ? "ثلاثة مسارات تحول بيانات المحاكاة إلى تقارير ومسودات محفوظة." : "Three workflows turn sample data into saved reports and drafts."}</p><span className="demo-chip">{ar ? "المحاكاة محلية • لا يتم فحص مواقع أو إرسال رسائل" : "Local demo · no live crawling or message sending"}</span></div><OrbitGraphic compact /></OrbitMotion>
    <div className="automation-grid">{recipes.map(recipe => <article className={`automation-card ${running === recipe.id ? "is-running" : ""}`} key={recipe.id}><span className="automation-icon">{recipe.id === "health" ? "◎" : recipe.id === "visibility" ? "⌖" : "✦"}</span><h3>{recipe.name[locale]}</h3><p>{recipe.detail[locale]}</p><ol className="pipeline">{recipe.steps.map((step, i) => <li key={step.en} className={running === recipe.id && stage >= i ? "active" : ""}><span>{running === recipe.id && stage > i ? "✓" : `0${i + 1}`}</span>{step[locale]}</li>)}</ol><button className="primary-button" disabled={!!running} onClick={() => run(recipe.id)}>{running === recipe.id ? ar ? "جارٍ التنفيذ…" : "Running…" : ar ? "تشغيل المسار" : "Run workflow"}</button><label className="schedule-choice"><input type="checkbox" checked={!!state.schedules[recipe.id]} onChange={e => update(s => ({ ...s, schedules: { ...s.schedules, [recipe.id]: e.target.checked } }))} />{ar ? "تكرار تجريبي كل دقيقة" : "Repeat demo every minute"}</label></article>)}</div>
    <p className="workspace-note">{ar ? "التكرار يعمل أثناء إبقاء صفحة الأتمتة مفتوحة ونشطة فقط. عند تفعيل عدة مسارات تتناوب كل دقيقة." : "Repeats only while this automation page stays open and visible. Multiple enabled workflows rotate each minute."}</p>
    <div className="run-feedback" aria-live="polite">{notice}{running && <button className="quiet-button" onClick={cancel}>{ar ? "إلغاء التشغيل" : "Cancel run"}</button>}</div>
    <section className="workspace-panel"><div className="panel-heading"><h2>{ar ? "سجل المدارات" : "Orbit activity"}</h2><span>{state.runs.length} {ar ? "تشغيل" : "runs"}</span></div>{state.runs.length ? <div className="run-list">{state.runs.slice(0, 8).map(item => <div key={item.id}><span className="run-check">✓</span><div><strong>{recipes.find(r => r.id === item.recipe)?.name[locale]}</strong><p dir="ltr">{item.domain} · {item.summary}</p></div><time dateTime={item.at}>{new Date(item.at).toLocaleString(ar ? "ar-SA" : "en-GB")}</time></div>)}</div> : <div className="empty-state"><span>◌</span><h3>{ar ? "أول مدار ينتظر الإطلاق" : "Your first orbit is ready to launch"}</h3><p>{ar ? "شغّل أحد المسارات لتظهر النتيجة هنا وفي التقارير." : "Run a workflow to see its result here and in Reports."}</p></div>}</section>
  </>;
}
