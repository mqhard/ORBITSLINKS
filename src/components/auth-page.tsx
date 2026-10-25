"use client";
import { brandName } from "@/content/brand";

import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { PublicHeader } from "@/components/public-header";
import { useSitePreferences } from "@/components/site-preferences";
import styles from "./auth-page.module.css";

function PasswordField({ confirm = false, signup }: { confirm?: boolean; signup: boolean }) {
  const { locale } = useSitePreferences();
  const ar = locale === "ar";
  const [visible, setVisible] = useState(false);
  const id = confirm ? "confirm-password" : "password";
  const label = confirm ? (ar ? "تأكيد كلمة المرور" : "Confirm password") : (ar ? "كلمة المرور" : "Password");

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.passwordField}>
        <input id={id} name={id} type={visible ? "text" : "password"} autoComplete={signup ? "new-password" : "current-password"} required dir="ltr" />
        <button type="button" aria-controls={id} aria-pressed={visible} aria-label={ar ? `إظهار ${label}` : `Show ${label.toLowerCase()}`} onClick={() => setVisible(value => !value)}>
          {visible ? (ar ? "إخفاء" : "Hide") : (ar ? "إظهار" : "Show")}
        </button>
      </div>
    </div>
  );
}

function AuthForm({ signup, buildNext }: { signup: boolean; buildNext?: string }) {
  const { locale } = useSitePreferences();
  const ar = locale === "ar";
  const modeHref = (mode: "login" | "signup") => `/auth/?mode=${mode}${buildNext ? `&next=${encodeURIComponent(buildNext)}` : ""}`;

  return (
    <>
      <header className={styles.formHeading}>
        <p className={styles.eyebrow}>{ar ? "حسابك في اوربيتس لينكس" : "YOUR ORBITS ACCOUNT"}</p>
        <h1 id="auth-title">{signup ? (ar ? "ابدأ مدارك." : "Start your orbit.") : (ar ? "مرحبًا بعودتك." : "Welcome back.")}</h1>
        <p>{signup ? (ar ? "خطوتك الأولى نحو مساحة تجمع أدواتك وأهدافك." : "Your first step toward one space for your tools and goals.") : (ar ? "كل أدواتك وأهدافك، في مساحة واحدة." : "Your tools and goals, together in one space.")}</p>
      </header>

      <nav className={styles.modeSwitch} aria-label={ar ? "خيارات الحساب" : "Account options"}>
        <Link href={modeHref("login")} scroll={false} aria-current={!signup ? "page" : undefined}>{ar ? "تسجيل الدخول" : "Sign in"}</Link>
        <Link href={modeHref("signup")} scroll={false} aria-current={signup ? "page" : undefined}>{ar ? "إنشاء حساب" : "Create account"}</Link>
      </nav>

      <p id="account-availability" className={styles.notice}>{ar ? "تسجيل الدخول وإنشاء الحسابات سيتاحان قريبًا. يمكنك استعراض النموذج الآن؛ لن تُرسل بياناتك أو تُحفظ." : "Sign-in and account creation are coming soon. You can preview the form; your details will not be sent or saved."}</p>

      {buildNext && <div className={styles.notice}><p>{ar ? "مخطط بيلد محفوظ على هذا المتصفح. ربطه بحسابك سيتاح عند تشغيل خدمة الحسابات." : "Your BUILD blueprint is saved in this browser. Account linking will be available when authentication is connected."}</p><Link href={buildNext}>{ar ? "العودة إلى تجربة مساحة بيلد المحلية" : "Return to the local BUILD workspace preview"} </Link></div>}

      {/* UI only: never create a local session or persist credentials. Wire a real auth service before enabling submission. */}
      <form className={styles.form} aria-labelledby="auth-title" aria-describedby="account-availability" onSubmit={event => event.preventDefault()}>
        {signup && <div className={styles.field}><label htmlFor="full-name">{ar ? "الاسم الكامل" : "Full name"}</label><input id="full-name" name="name" autoComplete="name" required dir="auto" /></div>}
        <div className={styles.field}><label htmlFor="email">{ar ? "البريد الإلكتروني" : "Email address"}</label><input id="email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" required dir="ltr" /></div>
        <PasswordField signup={signup} />
        {signup && <PasswordField confirm signup />}
        <button className={`primary-button ${styles.submit}`} type="submit" disabled aria-describedby="account-availability">{signup ? (ar ? "إنشاء الحساب" : "Create account") : (ar ? "تسجيل الدخول" : "Sign in")}</button>
      </form>

      <p className={styles.switchPrompt}>{signup ? (ar ? "لديك حساب بالفعل؟" : "Already have an account?") : (ar ? "ليس لديك حساب؟" : "New to ORBITS?")} <Link href={modeHref(signup ? "login" : "signup")} scroll={false}>{signup ? (ar ? "سجّل دخولك" : "Sign in") : (ar ? "أنشئ حسابًا" : "Create an account")}</Link></p>
      <div className={styles.legal}><Link href="/information/privacy/">{ar ? "الخصوصية" : "Privacy"}</Link><span aria-hidden="true">·</span><Link href="/information/terms/">{ar ? "شروط الاستخدام" : "Terms of use"}</Link></div>
    </>
  );
}

function AuthMode() {
  const params = useSearchParams();
  const signup = params.get("mode") === "signup";
  // Accept only a local BUILD destination; never redirect to an arbitrary URL.
  const buildId = params.get("next")?.match(/^\/workspace\/builds\/project\/\?id=([a-zA-Z0-9-]+)$/)?.[1];
  const buildNext = buildId ? `/workspace/builds/project/?id=${encodeURIComponent(buildId)}` : undefined;
  // Remount on a mode change so typed details and password visibility are cleared.
  return <AuthForm key={signup ? "signup" : "login"} signup={signup} buildNext={buildNext} />;
}

export function AuthPage() {
  const { locale } = useSitePreferences();
  const ar = locale === "ar";

  return (
    <>
      <PublicHeader />
      <main id="main-content" className={styles.page}>
        <div className={styles.layout}>
          <section className={styles.card} aria-label={ar ? "الدخول وإنشاء حساب" : "Sign in and create an account"}>
            <Suspense fallback={<p role="status">{ar ? "جارٍ تجهيز الصفحة…" : "Preparing your page…"}</p>}><AuthMode /></Suspense>
          </section>
          <aside className={styles.intro}>
            <BrandLogo className={styles.brandSymbol} />
            <p className={styles.eyebrow}>{locale === "ar" ? "اتصال في صميم التصميم" : "CONNECTED BY DESIGN"}</p>
            <h2>{ar ? "كل مداراتك.\nفي مكان واحد." : "All your orbits.\nOne place."}</h2>
            <p>{ar ? "من الفكرة إلى الخطوة التالية، مساحة تمنح عملك اتجاهًا أوضح." : "From the first idea to the next step, a space that gives your work a clearer direction."}</p>
            <ul><li>{ar ? "أدوات مترابطة حول أهدافك" : "Connected tools around your goals"}</li><li>{ar ? "أفكارك وتقاريرك في مساحة واحدة" : "Your ideas and reports in one space"}</li><li>{ar ? "رؤية أوضح لخطوتك التالية" : "A clearer view of your next step"}</li></ul>
            <span className={styles.signature}>{brandName[locale]}</span>
          </aside>
        </div>
        <Link className={styles.back} href="/">{ar ? "العودة إلى الموقع" : "Back to the website"}</Link>
      </main>
    </>
  );
}
