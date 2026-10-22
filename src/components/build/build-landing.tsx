'use client';
import Link from 'next/link';
import { PublicHeader } from '@/components/public-header';
import { SiteFooter } from '@/components/site-footer';
import { categories, tracks, t } from '@/content/build';
import { useBuildText, WebsiteJourney } from './build-shared';
import styles from './build.module.css';
const pillars = [
  t('السوق والجمهور والتموضع وسياق المشروع.', 'Market, audience, positioning and business context.'),
  t('استراتيجية العلامة ورسائلها والهوية البصرية ونظام استخدامها.', 'Brand strategy, messaging, visual identity and usage system.'),
  t('الموقع وتجربة المستخدم والجاهزية للبحث والاكتشاف بالذكاء الاصطناعي.', 'Website, user experience, search and AI discoverability readiness.'),
  t('النماذج وجمع العملاء المحتملين وCRM ومسار البيع والدعم.', 'Forms, lead capture, CRM, sales pipeline and support.'),
  t('المتابعة الآلية ووكلاء الذكاء الاصطناعي وأساس التقارير.', 'Automated follow-up, AI agents and reporting foundations.'),
  t('ملف الشركة والعروض الاستثمارية وقوالب العروض والمقترحات.', 'Company profile, pitch decks, presentation and proposal templates.'),
  t('ركائز المحتوى والحضور الاجتماعي وأصول الإطلاق.', 'Content pillars, social foundation and launch assets.'),
  t('الأنظمة التشغيلية والتكاملات والقياس وجودة التسليم وجاهزية الإطلاق.', 'Operational systems, integrations, measurement, quality and launch readiness.'),
];
export function BuildLanding() {
  const { ar, text } = useBuildText();
  return <><PublicHeader /><main id="main-content" className={`${styles.root} ${styles.public}`}><section className={styles.hero}><div><p className="section-eyebrow">ORBITS / BUILD</p><h1>{ar ? 'من حيث أنت،\nإلى مشروع جاهز.' : 'From where you are.\nTo ready for launch.'}</h1><p>{ar ? 'ابنِ فقط ما يحتاجه مشروعك. نربط الأساس والهوية والتجربة الرقمية وأنظمة العملاء في مخطط واحد واضح.' : 'Build only what your business needs. Bring your foundation, brand, digital experience and customer systems into one clear blueprint.'}</p><div className={styles.actions}><Link className="primary-button" href="/build/start/">{ar ? 'ابدأ مشروعك' : 'Start a Build'} ↗</Link><Link className="text-link" href="/workspace/builds/">{ar ? 'مشاريعي' : 'My Builds'}</Link></div><small>{ar ? 'تجربة تخطيط محلية الآن؛ ربط الحسابات والخدمات لاحقًا.' : 'Local planning preview now; accounts and services will be connected later.'}</small></div><div className={styles.orbitMap} aria-hidden="true"><div className={styles.orbitCore}>BUILD</div>{[t('الأساس', 'Foundation'), t('الهوية', 'Brand'), t('التجربة', 'Experience'), t('الأنظمة', 'Systems')].map((label, i) => <span key={i} className={styles.orbitNode} data-position={i}>{text(label)}</span>)}</div></section>
    <section className={styles.section}><header className={styles.heading}><p className="section-eyebrow">YOUR STARTING POINT</p><h2>{ar ? 'احتياجك يحدد البداية.' : 'Your needs define the start.'}</h2></header><div className={styles.grid3}>{Object.entries(tracks).map(([id, label], i) => <article key={id} className={styles.card}><span className={styles.number}>0{i + 1}</span><h3>{text(label)}</h3><p>{id === 'new' ? ar ? 'من الفكرة إلى أساس متكامل وجاهز للإطلاق.' : 'From an idea to a connected foundation ready to launch.' : id === 'gaps' ? ar ? 'تعرف على النواقص واحتفظ بكل ما يعمل بالفعل.' : 'Identify the gaps and keep what already works.' : ar ? 'هوية، موقع، CRM أو قدرة واحدة تحتاجها الآن.' : 'A brand, website, CRM or one capability you need today.'}</p><Link href={`/build/start/?track=${id}`}>{ar ? 'ابدأ من هنا' : 'Start here'} ↗</Link></article>)}</div></section>
    <section className={styles.section}><header className={styles.heading}><p className="section-eyebrow">ONE CONNECTED FOUNDATION</p><h2>{ar ? 'أجزاء مترابطة. نطاق يناسبك.' : 'Connected capabilities. Your scope.'}</h2><p>{ar ? 'هذه أبعاد ما يمكن أن يشمله مشروعك؛ المخطط يظهر منها ما تحتاجه فقط.' : 'These are the dimensions your build can cover. Your blueprint includes only what you need.'}</p></header><div className={styles.grid2}>{Object.values(categories).map((label, i) => <article className={styles.pillar} key={label.en}><span className={styles.number}>0{i + 1}</span><div><h3>{text(label)}</h3><p>{text(pillars[i])}</p></div></article>)}</div></section>
    <WebsiteJourney />
    <section className={styles.section}><header className={styles.heading}><p className="section-eyebrow">A CLEAR PATH TO LAUNCH</p><h2>{ar ? 'تعرف ما لديك. وحدد ما يلي.' : 'Know what you have. See what’s next.'}</h2></header><ol className={styles.journey}>{(ar ? ['اكتشاف احتياجك', 'تقييم الموجود والناقص', 'مخطط قابل للتعديل', 'مسارات ومخرجات وموافقات', 'جاهزية الإطلاق'] : ['Discover your needs', 'Assess assets & gaps', 'Shape your blueprint', 'Workstreams, outputs & approvals', 'Launch readiness']).map(label => <li key={label}>{label}</li>)}</ol></section>
    <section className={styles.completion}><p className="section-eyebrow">BUILD → GROWTH</p><h2>{ar ? 'أسّس اليوم. استعد للنمو.' : 'Build the foundation. Prepare to grow.'}</h2><p>{ar ? 'ينتهي BUILD عند جاهزية الإطلاق. ما بعد الإطلاق ينتمي إلى ORBITS Growth، كمرحلة لاحقة.' : 'BUILD ends at launch readiness. Post-launch work belongs to ORBITS Growth, as the next stage.'}</p><Link className="primary-button" href="/build/start/">{ar ? 'ابدأ مشروعك' : 'Start a Build'} ↗</Link></section>
  </main><SiteFooter /></>;
}
