"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type PointerEvent } from "react";
import { existingFoundations, formationStages, visibilityCapabilities as capabilities } from "@/content/visibility";
import s from "./visibility.module.css";
import { BrandLogo } from "@/components/brand-logo";


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
  return (
    <div className={`${s.drawing} ${s[variant]}`} aria-hidden="true">
      {variant === "map" ? (
        <svg viewBox="0 0 360 230">
          <path d="M52 70H165V118H300M52 165H125V118H165M165 118V48H280M235 118V186H300" />
          <rect x="22" y="45" width="103" height="47" rx="3" /><text x="73" y="74">Your knowledge</text>
          <rect x="22" y="142" width="103" height="47" rx="3" /><text x="73" y="171">Your website</text>
          <circle cx="165" cy="118" r="10" />
          <rect x="246" y="27" width="92" height="42" rx="3" /><text x="292" y="53">Questions</text>
          <rect x="246" y="97" width="92" height="42" rx="3" /><text x="292" y="123">Discovery</text>
          <rect x="246" y="165" width="92" height="42" rx="3" /><text x="292" y="191">Decisions</text>
        </svg>
      ) : variant === "content" ? (
        <div className={s.paperStack}>
          <div className={s.paperBack} />
          <div className={s.paper}><span>EDITORIAL DIRECTION / 01</span><strong>One question.<br />A useful answer.</strong><i /><i /><i /><div><b>Search intent</b><b>Evidence</b></div></div>
        </div>
      ) : (
        <div className={s.measureSheet}><span>FROM SIGNAL TO DECISION</span>{[["Discover", "Where are we found?"], ["Understand", "What is useful?"], ["Improve", "What happens next?"]].map(([title, subtitle], index) => <div key={title}><b>0{index + 1}</b><p><strong>{title}</strong><small>{subtitle}</small></p><Arrow /></div>)}</div>
      )}
    </div>
  );
}

export function VisibilityExperience() {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeId, setActiveId] = useState<string>("search");
  const [menuOpen, setMenuOpen] = useState(false);
  const [website, setWebsite] = useState("");
  const [context, setContext] = useState("");
  const [foundations, setFoundations] = useState<string[]>([]);
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState("");
  const sceneRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const active = capabilities.find((item) => item.id === activeId)!;

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
    setSummary([
      "ORBITS LINKS — VISIBILITY STARTING BRIEF",
      "Prototype / prepared locally — not submitted",
      "",
      "Need: Help more people find us.",
      `Website or project: ${website.trim() || "Not specified"}`,
      `Existing foundation: ${foundations.length ? foundations.join(", ") : "To explore together"}`,
      `Context: ${context.trim() || "To explore together"}`,
      "",
      "Potential connections: Search, AI Visibility, Local Presence, Content, Technical Health, Authority, Analytics.",
      "First conversation: clarify the audience, review what already exists and identify the most relevant connections.",
      "Possible outputs: opportunity map, connected content direction and measurement plan.",
      "Scope and timing: to be agreed after reviewing the starting point. No audit has been performed.",
    ].join("\n"));
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
    <div className={s.experience} lang="en" dir="ltr">
      <a className={s.skip} href="#visibility-main">Skip to content</a>
      <header className={s.header} onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
        <a href="#visibility-top" className={s.brand} aria-label="ORBITS LINKS — back to top"><BrandLogo className={s.symbol} /><span>ORBITS<span className={s.brandLight}> LINKS</span></span></a>
        <nav className={s.desktopNav} aria-label="Visibility navigation"><a href="#connections">The connections</a><a href="#practice">In practice</a><a href="#approach">Our approach</a></nav>
        <a href="#starting-point" className={s.headerCta}>Start with your need <Arrow diagonal /></a>
        <button className={s.menuButton} aria-expanded={menuOpen} aria-controls="visibility-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close −" : "Menu +"}</button>
        {menuOpen && <nav id="visibility-menu" className={s.mobileNav} aria-label="Mobile visibility navigation">{[["#connections", "The connections"], ["#practice", "In practice"], ["#approach", "Our approach"], ["#starting-point", "Start with your need"]].map(([href, text]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{text}<Arrow /></a>)}</nav>}
      </header>

      <main id="visibility-main">
        <section className={s.hero} id="visibility-top" aria-labelledby="visibility-title">
          <div className={s.heroCopy}>
            <p className={s.eyebrow}><span /> Worlds of Knowledge and Capabilities</p>
            <h1 id="visibility-title">More possible.<br />Built around<br /><em>you.</em></h1>
            <p className={s.promise}>What you have is the center.<br />We build around it what makes you capable of more.</p>
            <div className={s.needEntry}>
              <p className={s.needLabel}>What would you like to make possible?</p>
              <button id="visibility-need" onClick={begin} className={s.needButton}>Help more people find us.<span aria-hidden="true">↗</span></button>
              <p>Explore one need. See the right capabilities connect.</p>
            </div>
            <div className={s.heroFoot}><span>01 / VISIBILITY</span><a href="#connections">Explore the connections <span aria-hidden="true">↓</span></a></div>
          </div>

          <div className={s.heroVisual}>
            <div className={s.visualLabel}><span>THE SHAPE OF POSSIBILITY</span><span className={s.concept}>Interactive concept</span></div>
            <div className={s.scene} ref={sceneRef} data-stage={stage} onPointerMove={pointerMove} onPointerLeave={resetPointer}>
              <svg className={s.connectionSvg} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <ellipse className={s.guide} cx="50" cy="49" rx="33" ry="35" />
                {capabilities.map((item) => <line className={s.spoke} key={item.id} x1="50" y1="49" x2={item.x} y2={item.y} />)}
                {relationPairs.map(([a, b]) => <line key={`${a}-${b}`} className={`${s.link} ${[capabilities[a].id, capabilities[b].id].includes(activeId as typeof capabilities[number]["id"]) ? s.highlight : ""}`} x1={capabilities[a].x} y1={capabilities[a].y} x2={capabilities[b].x} y2={capabilities[b].y} />)}
              </svg>
              <div className={s.core}><BrandLogo className={s.symbol} label="ORBITS LINKS" /><span>Your existing<br /><strong>world.</strong></span></div>
              <div className={s.nodes} role="group" aria-label="Explore connected capabilities">{capabilities.map((item, index) =>
                <button key={item.id} className={`${s.node} ${activeId === item.id ? s.selectedNode : ""}`} style={{ "--x": `${item.x}%`, "--y": `${item.y}%`, "--node-index": index } as CSSProperties} aria-pressed={activeId === item.id} aria-controls="capability-detail" onClick={() => selectCapability(item.id)}><i /><span>{item.name}</span><small>0{index + 1}</small></button>,
              )}</div>
            </div>
            <div className={s.formationInfo} aria-live="polite" aria-atomic="true"><span className={s.stageNumber}>0{stage + 1}</span><div><h2>{formationStages[stage].title}</h2><p>{stage === 3 ? `${active.name} connects with ${active.connects.map(id => capabilities.find(item => item.id === id)?.name).join(", ")}.` : formationStages[stage].caption}</p>{stage === 3 && <a className={s.sceneDetailLink} href="#connections">Explore {active.name} <span aria-hidden="true">↓</span></a>}</div></div>
            <div className={s.stageControls} role="group" aria-label="Formation stages">{formationStages.map((item, index) => <button key={item.name} aria-pressed={stage === index} onClick={() => chooseStage(index)}><span>0{index + 1}</span>{item.name}</button>)}</div>
            <div className={s.sceneActions}><button onClick={() => playing ? setPlaying(false) : begin()}>{playing ? "Pause sequence" : stage > 0 ? "Replay formation" : "Play formation"}<span aria-hidden="true">{playing ? "Ⅱ" : "↗"}</span></button><button onClick={() => chooseStage(3)}>Skip to the complete system <span aria-hidden="true">→</span></button></div>
          </div>
        </section>

        <section className={s.intro} aria-labelledby="intro-title">
          <p className={s.eyebrow}>THE IDEA BEHIND THE CONNECTIONS</p>
          <h2 id="intro-title">Not more pieces.<br /><em>More working together.</em></h2>
          <div><p>A useful article. A well-built website. A trusted source. Each has value. The right connections make them capable of more.</p><p>Visibility is what becomes possible when those strengths work around one real need: helping the right people find you.</p></div>
        </section>

        <section className={s.connections} id="connections" aria-labelledby="connections-title">
          <div className={s.sectionHeading}><div><p className={s.eyebrow}>01 / THE VISIBILITY ORBIT</p><h2 id="connections-title">Seven capabilities.<br /><em>One shared purpose.</em></h2></div><p>Explore a capability to see what it solves,<br className={s.desktopOnly} /> what it connects and what it can produce.</p></div>
          <div className={s.capabilityLayout}>
            <div className={s.capabilityList} role="group" aria-label="Capability details">{capabilities.map((item, index) => <button key={item.id} onClick={() => setActiveId(item.id)} aria-pressed={activeId === item.id} aria-controls="capability-detail"><span>0{index + 1}</span>{item.name}<Arrow /></button>)}</div>
            <article className={s.capabilityDetail} id="capability-detail" aria-live="polite" aria-atomic="true">
              <div className={s.detailTop}><span>{active.name}</span><span>CAPABILITY / CONCEPT</span></div>
              <h3>{active.question}</h3>
              <p>{active.solves}</p>
              <div className={s.related}><span>Works with</span>{active.connects.map((id) => <button key={id} onClick={() => setActiveId(id)}>{capabilities.find((item) => item.id === id)?.name}<Arrow diagonal /></button>)}</div>
              <dl><div><dt>What is included</dt><dd>{active.includes}</dd></div><div><dt>What you receive</dt><dd>{active.output}</dd></div></dl>
              <a href="#starting-point" className={s.textLink}>Build this around what you already have <Arrow /></a>
            </article>
          </div>
          <div className={s.systemNote}><span className={s.smallMark}>↗</span><p><strong>A connected visibility system</strong> built around how people search, ask, discover, and decide.</p><span>VISIBILITY ORBIT</span></div>
        </section>

        <section className={s.practice} id="practice" aria-labelledby="practice-title">
          <div className={s.sectionHeading}><div><p className={s.eyebrow}>02 / FROM IDEA TO SOMETHING USEFUL</p><h2 id="practice-title">Connections you<br />can <em>put to work.</em></h2></div><p>Clear thinking should lead to practical outputs.<br />These are examples, not client results.</p></div>
          <div className={s.outputs}>{[
            { variant: "map" as const, title: "Know where to begin.", subtitle: "Visibility opportunity map", text: "Connect audience questions to your existing pages, knowledge and gaps. Give every priority a reason." },
            { variant: "content" as const, title: "Give knowledge direction.", subtitle: "Connected content plan", text: "Bring intent, expertise and evidence into reusable briefs. Make every piece part of the bigger picture." },
            { variant: "measure" as const, title: "Make the next move clearer.", subtitle: "Measurement & review framework", text: "Define the signals that matter, how to interpret them and what decisions they should inform." },
          ].map((item, index) => <article key={item.variant}><OutputDrawing variant={item.variant} /><div className={s.outputText}><span>EXAMPLE OUTPUT / 0{index + 1}</span><h3>{item.title}</h3><h4>{item.subtitle}</h4><p>{item.text}</p></div></article>)}</div>
        </section>

        <section className={s.approach} id="approach" aria-labelledby="approach-title">
          <div className={s.approachIntro}><p className={s.eyebrow}>03 / A THOUGHTFUL WAY FORWARD</p><h2 id="approach-title">Begin with what’s here.<br /><em>Build what comes next.</em></h2><p>The starting point shapes the scope. The scope shapes the sequence. Timing is agreed once we understand both.</p><BrandLogo className={s.symbol} /></div>
          <ol className={s.process}>{[
            ["Understand", "Listen before adding.", "Clarify the need, the audience and the knowledge, people and tools already in place."],
            ["Connect", "Find the useful relationships.", "Map relevant capabilities and dependencies. Decide what deserves attention first."],
            ["Build", "Turn direction into useful work.", "Develop the agreed outputs around your starting point, with clear ownership and review."],
            ["Learn & expand", "Let the next step earn its place.", "Review the signals together. Improve the system and expand only where it adds value."],
          ].map(([label, title, text], index) => <li key={label}><span>0{index + 1}</span><div><small>{label}</small><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </section>

        <section className={s.startingPoint} id="starting-point" aria-labelledby="starting-title">
          <div className={s.startCopy}><p className={s.eyebrow}>YOUR STARTING POINT</p><h2 id="starting-title">You don’t need<br />to start <em>over.</em><br />Start here.</h2><p>Tell us what is already in your world.<br />Let’s give the next conversation a useful beginning.</p><aside><span>PROTOTYPE NOTE</span><p>This creates a brief on your device. Nothing is sent, no website is analysed and no account is required.</p></aside></div>
          <div className={s.formPanel}>
            {!summary ? <form onSubmit={submitBrief}>
              <div className={s.selectedNeed}><span>THE NEED</span><p>Help more people find us.</p><span aria-hidden="true">↗</span></div>
              <label className={s.fieldLabel} htmlFor="project-context">Your website or project <small>Optional</small></label>
              <input id="project-context" type="text" maxLength={240} value={website} onChange={(event) => setWebsite(event.target.value)} placeholder="A website, a name, or a work in progress" autoComplete="off" />
              <fieldset><legend>What do you already have? <small>Select any that apply</small></legend><div className={s.foundationChoices}>{existingFoundations.map((item) => <label key={item}><input type="checkbox" checked={foundations.includes(item)} onChange={(event) => setFoundations(event.target.checked ? [...foundations, item] : foundations.filter((value) => value !== item))} /><span>{item}</span></label>)}</div></fieldset>
              <label className={s.fieldLabel} htmlFor="need-context">What would better visibility make possible? <small>Optional</small></label>
              <textarea id="need-context" rows={3} maxLength={1200} placeholder="What would you like to change or understand?" value={context} onChange={(event) => setContext(event.target.value)} />
              <button className={s.primaryButton} type="submit">Create my starting brief <Arrow /></button><p className={s.formFoot}>A starting point, not a commitment.</p>
            </form> : <div className={s.summary} ref={summaryRef} tabIndex={-1} aria-labelledby="brief-title"><span className={s.eyebrow}>YOUR STARTING BRIEF / READY</span><h3 id="brief-title">A clearer place<br />to begin.</h3><p>This brief is only on this page until you download or copy it. It has not been sent to ORBITS LINKS.</p><pre>{summary}</pre><div className={s.summaryActions}><button className={s.primaryButton} onClick={downloadBrief}>Download brief <span aria-hidden="true">↓</span></button><button onClick={copyBrief}>Copy brief</button><button onClick={() => setSummary("")}>Edit my answers</button></div><p role="status">{copied}</p></div>}
          </div>
        </section>
      </main>

      <footer className={s.footer}><div><a href="#visibility-top" className={s.brand}><BrandLogo className={s.symbol} /><span>ORBITS LINKS</span></a><p>Worlds of Knowledge and Capabilities.</p></div><div><span>VISIBILITY / EXPERIENCE PROTOTYPE</span><a href="/">Return to the existing site <Arrow diagonal /></a><a href="#visibility-top">Back to the beginning ↑</a></div><p className={s.footerStatement}>What you have<br />is <em>the center.</em></p></footer>
    </div>
  );
}
