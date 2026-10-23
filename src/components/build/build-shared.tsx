'use client';
import { useState, type ReactNode } from 'react';
import { capabilities, categories, stateLabels, t, type Text } from '@/content/build';
import { dependenciesFor, inScope, makeItem, updateItem, type BuildProject, type WorkState } from '@/lib/build-model';
import { useSitePreferences } from '@/components/site-preferences';
import styles from './build.module.css';
export function useBuildText() { const { locale } = useSitePreferences(); return { locale, ar: locale === 'ar', text: (value: Text) => value[locale] }; }
export function LocalNotice() { const { ar } = useBuildText(); return <p className={styles.notice}>{ar ? 'نسخة تجريبية: تُحفظ مشاريعك على هذا المتصفح فقط. الحسابات والتكاملات وخدمات التنفيذ غير متصلة بعد.' : 'Local preview: projects are saved in this browser only. Accounts, integrations and delivery services are not connected yet.'}</p>; }
export function StorageError() { const { ar } = useBuildText(); return <p role="alert" className={styles.warning}>{ar ? 'تعذر قراءة المشاريع أو حفظ التغيير. تحقق من سماح المتصفح بالتخزين والمساحة المتاحة؛ لم يتم تأكيد الحفظ.' : 'Could not read projects or save this change. Check browser storage access and available space; saving is not confirmed.'}</p>; }
export function Empty({ children }: { children: ReactNode }) { return <div className={styles.empty}>{children}</div>; }
export function Meter({ value, label }: { value: number; label: string }) { return <div className={styles.meter}><div><span>{label}</span><strong>{value}%</strong></div><progress value={value} max={100} aria-label={label} /></div>; }
export function BlueprintEditor({ project, onChange }: { project: BuildProject; onChange: (next: BuildProject, message: Text) => void }) {
  const { ar, text } = useBuildText();
  const [recommend, setRecommend] = useState<string | null>(null);
  const missing = capabilities.filter(c => !project.items.some(i => i.id === c.id));
  return <div className={styles.stack}>
    <p className={styles.muted}>{ar ? 'ابنِ ما تحتاجه وتجاوز ما لديك. العناصر المؤجلة والمستبعدة والاختيارية لا تدخل في نسبة الإنجاز.' : 'Build what you need. Skip what you already have. Postponed, removed and optional items do not count toward progress.'}</p>
    {Object.entries(categories).map(([category, name]) => {
      const items = project.items.filter(i => capabilities.find(c => c.id === i.id)?.category === category);
      if (!items.length) return null;
      return <section key={category} className={styles.card}><h3>{text(name)}</h3><div className={styles.stack}>{items.map(item => {
        const capability = capabilities.find(c => c.id === item.id)!;
        const dependencies = dependenciesFor(project, item.id);
        return <article key={item.id} className={styles.capability}>
          <div className={styles.row}><div><strong>{text(capability.name)}</strong><p>{text(capability.objective)}</p></div><label className={styles.field}><span>{ar ? 'حالة النطاق والتنفيذ' : 'Scope & execution state'}</span><select aria-label={`${text(capability.name)} — ${ar ? 'الحالة' : 'status'}`} value={item.state} onChange={e => onChange(updateItem(project, item.id, { state: e.target.value as WorkState }), t(`تحديث ${capability.name.ar}`, `Updated ${capability.name.en}`))}>{Object.entries(stateLabels).map(([value, label]) => <option key={value} value={value}>{text(label)}</option>)}</select></label></div>
          {inScope(item) && dependencies.length > 0 && <p className={styles.warning}>{ar ? 'راجع الاعتماد على: ' : 'Review dependencies: '}{dependencies.map(id => text(capabilities.find(c => c.id === id)!.name)).join(' · ')}. {ar ? 'توصية لا تمنع متابعة العمل.' : 'Advisory; you can continue.'}</p>}
          <button type="button" className="quiet-button" aria-expanded={recommend === item.id} onClick={() => setRecommend(recommend === item.id ? null : item.id)}>{ar ? 'اطلب توصية' : 'Request recommendation'} ↗</button>
          {recommend === item.id && <div className={styles.inset}><p>{ar ? 'توصية مبنية على نطاق المشروع وحالاتك المسجلة، وليست تحليلًا آليًا خارجيًا.' : 'A recommendation based on scope and your recorded states, not an external AI analysis.'}</p><p>{text(capability.objective)}</p>{dependencies.length ? <><p>{ar ? 'أضف المدخلات التالية أو سجّلها كموجودة إذا كانت جاهزة:' : 'Add these inputs, or mark them existing if they are ready:'}</p><div className={styles.actions}>{dependencies.map(id => { const dep = capabilities.find(c => c.id === id)!; const exists = project.items.some(i => i.id === id); return <button key={id} type="button" className="secondary-button" onClick={() => onChange(exists ? updateItem(project, id, { state: 'todo' }) : { ...project, items: [...project.items, makeItem(id)], launchApproved: false, status: project.status === 'completed' ? 'active' : project.status }, t(`أضيف ${dep.name.ar} إلى النطاق`, `Added ${dep.name.en} to scope`))}>{ar ? 'إدراج' : 'Include'} {text(dep.name)}</button>; })}</div></> : <p>{ar ? 'لا توجد مدخلات ناقصة مسجلة. حدد المسؤول والمخرج ثم ابدأ العمل.' : 'No missing dependencies are recorded. Assign an owner, define the output and start work.'}</p>}</div>}
        </article>;
      })}</div></section>;
    })}
    {missing.length > 0 && <details className={styles.card}><summary>{ar ? 'إضافة قدرات إلى المشروع' : 'Add capabilities to this build'}</summary><div className={styles.addGrid}>{missing.map(c => <button type="button" className="secondary-button" key={c.id} onClick={() => onChange({ ...project, items: [...project.items, makeItem(c.id)], launchApproved: false, status: project.status === 'completed' ? 'active' : project.status }, t(`أضيف ${c.name.ar}`, `Added ${c.name.en}`))}>+ {text(c.name)}</button>)}</div></details>}
  </div>;
}
export function WebsiteJourney() {
  const { ar } = useBuildText();
  const nodes = ar ? ['قبل الزيارة: البحث والاكتشاف', 'أثناء الزيارة: تجربة ومحتوى', 'بعد الإجراء: نموذج وطلب', 'CRM: تنظيم العميل', 'الأتمتة: متابعة', 'الفريق / AI: استجابة', 'العميل: تجربة متصلة'] : ['Before visit: discovery', 'During visit: UX & content', 'After action: enquiry', 'CRM: organize', 'Automation: follow up', 'Team / AI: respond', 'Customer: connected experience'];
  return <section className={styles.card}><p className="section-eyebrow">{ar ? "الموقع / اتصال في صميم التصميم" : "WEBSITE / CONNECTED BY DESIGN"}</p><h2>{ar ? 'موقع يعمل مع مشروعك.' : 'A website that works with your business.'}</h2><p>{ar ? 'نقطة تشغيل رقمية تربط التجربة والبحث وجمع العملاء والقياس والمتابعة. تُضاف هذه القدرات حسب نطاق مشروعك.' : 'An operational digital touchpoint connecting experience, discovery, lead capture, measurement and follow-up. Include only the capabilities your project needs.'}</p><ol className={styles.journey}>{nodes.map(node => <li key={node}>{node}</li>)}</ol></section>;
}
