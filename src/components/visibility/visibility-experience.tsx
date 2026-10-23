"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type PointerEvent } from "react";
import { existingFoundations, formationStages, visibilityCapabilities as capabilities } from "@/content/visibility";
import { useSitePreferences } from '@/components/site-preferences';
import visibilityArabic from '@/content/visibility-ar.json';
import s from "./visibility.module.css";
import { BrandLogo } from "@/components/brand-logo";


function useVisibilityText() {
  const { locale, setLocale } = useSitePreferences();
  const v = (value: string) => locale === 'ar' ? (visibilityArabic as Record<string, string>)[value] ?? value : value;
  return { locale, setLocale, v };
}

const relationPairs = capabilities.flatMap((item, index) =>
  item.connects.flatMap((id) => {
    const target = capabilities.findIndex((candidate) => candidate.id === id);
    return [[Math.min(index, target), Math.max(index, target)] as const];
  }),
).filter(([a, b], index, pairs) => pairs.findIndex(([x, y]) => a === x && b === y) === index);

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function OutputDrawing({ variant }: { variant: "map" | "content" | "measure" }) {
  const { v } = useVisibilityText();
  return (
    <div className={`${s.drawing} ${s[variant]}`} aria-hidden="true">
      {variant === "map" ? (
        <svg viewBox="0 0 360 230">
          <path d="M52 70H165V118H300M52 165H125V118H165M165 118V48H280M235 118V186H300" />
          <rect x="22" y="45" width="103" height="47" rx="3" /><text x="73" y="74">{v("Your knowledge")}</text>
          <rect x="22" y="142" width="103" height="47" rx="3" /><text x="73" y="171">{v("Your website")}</text>
          <circle cx="165" cy="118" r="10" />
          <rect x="246" y="27" width="92" height="42" rx="3" /><text x="292" y="53">{v("Questions")}</text>
          <rect x="246" y="97" width="92" height="42" rx="3" /><text x="292" y="123">{v("Discovery")}</text>
          <rect x="246" y="165" width="92" height="42" rx="3" /><text x="292" y="191">{v("Decisions")}</text>
        </svg>
      ) : variant === "content" ? (
        <div className={s.paperStack}>
          <div className={s.paperBack} />
          <div className={s.paper}><span>{v("EDITORIAL DIRECTION / 01")}</span><strong>{v("One question.")}<br />{v("A useful answer.")}</strong><i /><i /><i /><div><b>{v("Search intent")}</b><b>{v("Evidence")}</b></div></div>
        </div>
      ) : (
        <div className={s.measureSheet}><span>{v("FROM SIGNAL TO DECISION")}</span>{[[v("Discover"), v("Where are we found?")], [v("Understand"), v("What is useful?")], [v("Improve"), v("What happens next?")]].map(([title, subtitle], index) => <div key={title}><b>0{index + 1}</b><p><strong>{title}</strong><small>{subtitle}</small></p><Arrow /></div>)}</div>
      )}
    </div>
  );
}

export function VisibilityExperience() {
  const { locale, setLocale, v } = useVisibilityText();
  const localizedCapabilities = capabilities.map(item => ({ ...item, name: v(item.name), question: v(item.question), solves: v(item.solves), includes: v(item.includes), output: v(item.output) }));
  const localizedStages = formationStages.map(item => ({ ...item, name: v(item.name), title: v(item.title), caption: v(item.caption) }));
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeId, setActiveId] = useState<string>("search");
  const [menuOpen, setMenuOpen] = useState(false);
  const [website, setWebsite] = useState("");
  const [context, setContext] = useState("");
  const [foundations, setFoundations] = useState<string[]>([]);
  const [prepared, setPrepared] = useState(false);
  const summary = prepared ? [
      v("ORBITS LINKS — VISIBILITY STARTING BRIEF"),
      v("Prototype / prepared locally — not submitted"),
      "",
      v("Need: Help more people find us."),
      `${locale === "ar" ? "الموقع أو المشروع" : "Website or project"}: ${website.trim() || v("Not specified")}`,
      `${locale === "ar" ? "الأساس الموجود" : "Existing foundation"}: ${foundations.length ? foundations.map(v).join(locale === "ar" ? "، " : ", ") : v("To explore together")}`,
      `${locale === "ar" ? "السياق" : "Context"}: ${context.trim() || v("To explore together")}`,
      "",
      v("Potential connections: Search, AI Visibility, Local Presence, Content, Technical Health, Authority, Analytics."),
      v("First conversation: clarify the audience, review what already exists and identify the most relevant connections."),
      v("Possible outputs: opportunity map, connected content direction and measurement plan."),
      v("Scope and timing: to be agreed after reviewing the starting point. No audit has been performed."),
    ].join("\n") : "";
  const [copied, setCopied] = useState("");
  const sceneRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const active = localizedCapabilities.find((item) => item.id === activeId)!;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(query.matches);
      if (query.matches) {
        setPlaying(false);
        sceneRef.current?.style.removeProperty("--pointer-x");
        sceneRef.current?.style.removeProperty("--pointer-y");
      }
    };
    update();
    query.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (stage === 3) { setPlaying(false); return; }
    const timer = window.setTimeout(() => setStage((value) => value + 1), 1700);
    return () => window.clearTimeout(timer);
  }, [stage, playing]);

  useEffect(() => {
    if (summary) summaryRef.current?.focus();
  }, [summary]);

  function chooseStage(index: number) {
    setPlaying(false);
    setStage(index);
  }

  function begin() {
    setStage(reducedMotion ? 3 : 0);
    setPlaying(!reducedMotion);
    if (window.matchMedia("(max-width: 800px)").matches) {
      sceneRef.current?.scrollIntoView({ block: "start", behavior: reducedMotion ? "instant" : "smooth" });
    }
  }

  function pointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      sceneRef.current?.style.setProperty("--pointer-x", `${x * 8}px`);
      sceneRef.current?.style.setProperty("--pointer-y", `${y * 8}px`);
      frameRef.current = null;
    });
  }

  function resetPointer() {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    sceneRef.current?.style.setProperty("--pointer-x", "0px");
    sceneRef.current?.style.setProperty("--pointer-y", "0px");
  }

  function selectCapability(id: string) {
    setActiveId(id);
    chooseStage(3);
  }

  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCopied("");
    setPrepared(true);
  }

  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([summary], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "orbits-links-visibility-brief.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function copyBrief() {
    try { await navigator.clipboard.writeText(summary); setCopied("Brief copied."); }
    catch { setCopied("Copy is unavailable here. Use Download brief instead."); }
  }

  return (
    <div className={s.experience} lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <a className={s.skip} href="#visibility-main">{v("Skip to content")}</a>
      <header className={s.header} onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
        <a href="#visibility-top" className={s.brand} aria-label={v("ORBITS LINKS — back to top")}><BrandLogo className={s.symbol} /><span>{v("ORBITS")}<span className={s.brandLight}> {v("LINKS")}</span></span></a>
        <button className={s.localeButton} onClick={() => setLocale(locale === "ar" ? "en" : "ar")} lang={locale === "ar" ? "en" : "ar"}>{locale === "ar" ? "English" : "العربية"}</button>
        <nav className={s.desktopNav} aria-label={v("Visibility navigation")}><a href="#connections">{v("The connections")}</a><a href="#practice">{v("In practice")}</a><a href="#approach">{v("Our approach")}</a></nav>
        <a href="#starting-point" className={s.headerCta}>{v("Start with your need")} <Arrow diagonal /></a>
        <button className={s.menuButton} aria-expanded={menuOpen} aria-controls="visibility-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? v("Close −") : v("Menu +")}</button>
        {menuOpen && <nav id="visibility-menu" className={s.mobileNav} aria-label={v("Mobile visibility navigation")}>{[["#connections", v("The connections")], ["#practice", v("In practice")], ["#approach", v("Our approach")], ["#starting-point", v("Start with your need")]].map(([href, text]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{text}<Arrow /></a>)}</nav>}
      </header>

      <main id="visibility-main">
        <section className={s.hero} id="visibility-top" aria-labelledby="visibility-title">
          <div className={s.heroCopy}>
            <p className={s.eyebrow}><span /> {v("Worlds of Knowledge and Capabilities")}</p>
            <h1 id="visibility-title">{v("More possible.")}<br />{v("Built around")}<br /><em>{v("you.")}</em></h1>
            <p className={s.promise}>{v("What you have is the center.")}<br />{v("We build around it what makes you capable of more.")}</p>
            <div className={s.needEntry}>
              <p className={s.needLabel}>{v("What would you like to make possible?")}</p>
              <button id="visibility-need" onClick={begin} className={s.needButton}>{v("Help more people find us.")}<span aria-hidden="true">↗</span></button>
              <p>{v("Explore one need. See the right capabilities connect.")}</p>
            </div>
            <div className={s.heroFoot}><span>{v("01 / VISIBILITY")}</span><a href="#connections">{v("Explore the connections")} <span aria-hidden="true">↓</span></a></div>
          </div>

          <div className={s.heroVisual}>
            <div className={s.visualLabel}><span>{v("THE SHAPE OF POSSIBILITY")}</span><span className={s.concept}>{v("Interactive concept")}</span></div>
            <div className={s.scene} ref={sceneRef} data-stage={stage} onPointerMove={pointerMove} onPointerLeave={resetPointer}>
              <svg className={s.connectionSvg} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <ellipse className={s.guide} cx="50" cy="49" rx="33" ry="35" />
                {localizedCapabilities.map((item) => <line className={s.spoke} key={item.id} x1="50" y1="49" x2={item.x} y2={item.y} />)}
                {relationPairs.map(([a, b]) => <line key={`${a}-${b}`} className={`${s.link} ${[localizedCapabilities[a].id, localizedCapabilities[b].id].includes(activeId as typeof localizedCapabilities[number]["id"]) ? s.highlight : ""}`} x1={localizedCapabilities[a].x} y1={localizedCapabilities[a].y} x2={localizedCapabilities[b].x} y2={localizedCapabilities[b].y} />)}
              </svg>
              <div className={s.core}><BrandLogo className={s.symbol} label={v("ORBITS LINKS")} /><span>{v("Your existing")}<br /><strong>{v("world.")}</strong></span></div>
              <div className={s.nodes} role="group" aria-label={v("Explore connected capabilities")}>{localizedCapabilities.map((item, index) =>
                <button key={item.id} className={`${s.node} ${activeId === item.id ? s.selectedNode : ""}`} style={{ "--x": `${item.x}%`, "--y": `${item.y}%`, "--node-index": index } as CSSProperties} aria-pressed={activeId === item.id} aria-controls="capability-detail" onClick={() => selectCapability(item.id)}><i /><span>{item.name}</span><small>0{index + 1}</small></button>,
              )}</div>
            </div>
            <div className={s.formationInfo} aria-live="polite" aria-atomic="true"><span className={s.stageNumber}>0{stage + 1}</span><div><h2>{localizedStages[stage].title}</h2><p>{stage === 3 ? `${active.name} ${locale === "ar" ? "ترتبط مع" : "connects with"} ${active.connects.map(id => localizedCapabilities.find(item => item.id === id)?.name).join(locale === "ar" ? "، " : ", ")}.` : localizedStages[stage].caption}</p>{stage === 3 && <a className={s.sceneDetailLink} href="#connections">{v("Explore")} {active.name} <span aria-hidden="true">↓</span></a>}</div></div>
            <div className={s.stageControls} role="group" aria-label={v("Formation stages")}>{localizedStages.map((item, index) => <button key={item.name} aria-pressed={stage === index} onClick={() => chooseStage(index)}><span>0{index + 1}</span>{item.name}</button>)}</div>
            <div className={s.sceneActions}><button onClick={() => playing ? setPlaying(false) : begin()}>{playing ? v("Pause sequence") : stage > 0 ? v("Replay formation") : v("Play formation")}<span aria-hidden="true">{playing ? "Ⅱ" : "↗"}</span></button><button onClick={() => chooseStage(3)}>{v("Skip to the complete system")} <span aria-hidden="true">→</span></button></div>
          </div>
        </section>

        <section className={s.intro} aria-labelledby="intro-title">
          <p className={s.eyebrow}>{v("THE IDEA BEHIND THE CONNECTIONS")}</p>
          <h2 id="intro-title">{v("Not more pieces.")}<br /><em>{v("More working together.")}</em></h2>
          <div><p>{v("A useful article. A well-built website. A trusted source. Each has value. The right connections make them capable of more.")}</p><p>{v("Visibility is what becomes possible when those strengths work around one real need: helping the right people find you.")}</p></div>
        </section>

        <section className={s.connections} id="connections" aria-labelledby="connections-title">
          <div className={s.sectionHeading}><div><p className={s.eyebrow}>{v("01 / THE VISIBILITY ORBIT")}</p><h2 id="connections-title">{v("Seven capabilities.")}<br /><em>{v("One shared purpose.")}</em></h2></div><p>{v("Explore a capability to see what it solves,")}<br className={s.desktopOnly} /> {v("what it connects and what it can produce.")}</p></div>
          <div className={s.capabilityLayout}>
            <div className={s.capabilityList} role="group" aria-label={v("Capability details")}>{localizedCapabilities.map((item, index) => <button key={item.id} onClick={() => setActiveId(item.id)} aria-pressed={activeId === item.id} aria-controls="capability-detail"><span>0{index + 1}</span>{item.name}<Arrow /></button>)}</div>
            <article className={s.capabilityDetail} id="capability-detail" aria-live="polite" aria-atomic="true">
              <div className={s.detailTop}><span>{active.name}</span><span>{v("CAPABILITY / CONCEPT")}</span></div>
              <h3>{active.question}</h3>
              <p>{active.solves}</p>
              <div className={s.related}><span>{v("Works with")}</span>{active.connects.map((id) => <button key={id} onClick={() => setActiveId(id)}>{localizedCapabilities.find((item) => item.id === id)?.name}<Arrow diagonal /></button>)}</div>
              <dl><div><dt>{v("What is included")}</dt><dd>{active.includes}</dd></div><div><dt>{v("What you receive")}</dt><dd>{active.output}</dd></div></dl>
              <a href="#starting-point" className={s.textLink}>{v("Build this around what you already have")} <Arrow /></a>
            </article>
          </div>
          <div className={s.systemNote}><span className={s.smallMark}>↗</span><p><strong>{v("A connected visibility system")}</strong> {v("built around how people search, ask, discover, and decide.")}</p><span>{v("VISIBILITY ORBIT")}</span></div>
        </section>

        <section className={s.practice} id="practice" aria-labelledby="practice-title">
          <div className={s.sectionHeading}><div><p className={s.eyebrow}>{v("02 / FROM IDEA TO SOMETHING USEFUL")}</p><h2 id="practice-title">{v("Connections you")}<br />{v("can") + " "}<em>{v("put to work.")}</em></h2></div><p>{v("Clear thinking should lead to practical outputs.")}<br />{v("These are examples, not client results.")}</p></div>
          <div className={s.outputs}>{[
            { variant: "map" as const, title: v("Know where to begin."), subtitle: v("Visibility opportunity map"), text: v("Connect audience questions to your existing pages, knowledge and gaps. Give every priority a reason.") },
            { variant: "content" as const, title: v("Give knowledge direction."), subtitle: v("Connected content plan"), text: v("Bring intent, expertise and evidence into reusable briefs. Make every piece part of the bigger picture.") },
            { variant: "measure" as const, title: v("Make the next move clearer."), subtitle: v("Measurement & review framework"), text: v("Define the signals that matter, how to interpret them and what decisions they should inform.") },
          ].map((item, index) => <article key={item.variant}><OutputDrawing variant={item.variant} /><div className={s.outputText}><span>{v("EXAMPLE OUTPUT / 0")}{index + 1}</span><h3>{item.title}</h3><h4>{item.subtitle}</h4><p>{item.text}</p></div></article>)}</div>
        </section>

        <section className={s.approach} id="approach" aria-labelledby="approach-title">
          <div className={s.approachIntro}><p className={s.eyebrow}>{v("03 / A THOUGHTFUL WAY FORWARD")}</p><h2 id="approach-title">{v("Begin with what’s here.")}<br /><em>{v("Build what comes next.")}</em></h2><p>{v("The starting point shapes the scope. The scope shapes the sequence. Timing is agreed once we understand both.")}</p><BrandLogo className={s.symbol} /></div>
          <ol className={s.process}>{[
            [v("Understand"), v("Listen before adding."), v("Clarify the need, the audience and the knowledge, people and tools already in place.")],
            [v("Connect"), v("Find the useful relationships."), v("Map relevant capabilities and dependencies. Decide what deserves attention first.")],
            [v("Build"), v("Turn direction into useful work."), v("Develop the agreed outputs around your starting point, with clear ownership and review.")],
            [v("Learn & expand"), v("Let the next step earn its place."), v("Review the signals together. Improve the system and expand only where it adds value.")],
          ].map(([label, title, text], index) => <li key={label}><span>0{index + 1}</span><div><small>{label}</small><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </section>

        <section className={s.startingPoint} id="starting-point" aria-labelledby="starting-title">
          <div className={s.startCopy}><p className={s.eyebrow}>{v("YOUR STARTING POINT")}</p><h2 id="starting-title">{v("You don’t need")}<br />{v("to start") + " "}<em>{v("over.")}</em><br />{v("Start here.")}</h2><p>{v("Tell us what is already in your world.")}<br />{v("Let’s give the next conversation a useful beginning.")}</p><aside><span>{v("PROTOTYPE NOTE")}</span><p>{v("This creates a brief on your device. Nothing is sent, no website is analysed and no account is required.")}</p></aside></div>
          <div className={s.formPanel}>
            {!summary ? <form onSubmit={submitBrief}>
              <div className={s.selectedNeed}><span>{v("THE NEED")}</span><p>{v("Help more people find us.")}</p><span aria-hidden="true">↗</span></div>
              <label className={s.fieldLabel} htmlFor="project-context">{v("Your website or project")} <small>{v("Optional")}</small></label>
              <input id="project-context" type="text" maxLength={240} value={website} onChange={(event) => setWebsite(event.target.value)} placeholder={v("A website, a name, or a work in progress")} autoComplete="off" />
              <fieldset><legend>{v("What do you already have?")} <small>{v("Select any that apply")}</small></legend><div className={s.foundationChoices}>{existingFoundations.map((item) => <label key={item}><input type="checkbox" checked={foundations.includes(item)} onChange={(event) => setFoundations(event.target.checked ? [...foundations, item] : foundations.filter((value) => value !== item))} /><span>{v(item)}</span></label>)}</div></fieldset>
              <label className={s.fieldLabel} htmlFor="need-context">{v("What would better visibility make possible?")} <small>{v("Optional")}</small></label>
              <textarea id="need-context" rows={3} maxLength={1200} placeholder={v("What would you like to change or understand?")} value={context} onChange={(event) => setContext(event.target.value)} />
              <button className={s.primaryButton} type="submit">{v("Create my starting brief")} <Arrow /></button><p className={s.formFoot}>{v("A starting point, not a commitment.")}</p>
            </form> : <div className={s.summary} ref={summaryRef} tabIndex={-1} aria-labelledby="brief-title"><span className={s.eyebrow}>{v("YOUR STARTING BRIEF / READY")}</span><h3 id="brief-title">{v("A clearer place")}<br />{v("to begin.")}</h3><p>{v("This brief is only on this page until you download or copy it. It has not been sent to ORBITS LINKS.")}</p><pre>{summary}</pre><div className={s.summaryActions}><button className={s.primaryButton} onClick={downloadBrief}>{v("Download brief")} <span aria-hidden="true">↓</span></button><button onClick={copyBrief}>{v("Copy brief")}</button><button onClick={() => setPrepared(false)}>{v("Edit my answers")}</button></div><p role="status">{v(copied)}</p></div>}
          </div>
        </section>
      </main>

      <footer className={s.footer}><div><a href="#visibility-top" className={s.brand}><BrandLogo className={s.symbol} /><span>{v("ORBITS LINKS")}</span></a><p>{v("Worlds of Knowledge and Capabilities.")}</p></div><div><span>{v("VISIBILITY / EXPERIENCE PROTOTYPE")}</span><a href="/">{v("Return to the existing site")} <Arrow diagonal /></a><a href="#visibility-top">{v("Back to the beginning ↑")}</a></div><p className={s.footerStatement}>{v("What you have")}<br />{v("is")} <em>{v("the center.")}</em></p></footer>
    </div>
  );
}
