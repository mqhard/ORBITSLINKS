"use client";
import { useSitePreferences } from "./site-preferences";
import { useEffect, useRef, type ReactNode } from "react";
export function OrbitMotion({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const reset = () => { cancelAnimationFrame(frame); node.style.setProperty("--orbit-x", "0px"); node.style.setProperty("--orbit-y", "0px"); node.style.setProperty("--orbit-tilt", "0deg"); };
    const move = (e: PointerEvent) => {
      if (media.matches || e.pointerType !== "mouse") return;
      const rect = node.getBoundingClientRect(); const x = (e.clientX - rect.left) / rect.width - .5; const y = (e.clientY - rect.top) / rect.height - .5;
      cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { node.style.setProperty("--orbit-x", `${x * 24}px`); node.style.setProperty("--orbit-y", `${y * 18}px`); node.style.setProperty("--orbit-tilt", `${x * 3}deg`); node.style.setProperty("--pointer-x", `${(x + .5) * 100}%`); node.style.setProperty("--pointer-y", `${(y + .5) * 100}%`); });
    };
    node.addEventListener("pointermove", move); node.addEventListener("pointerleave", reset); media.addEventListener("change", reset);
    return () => { reset(); node.removeEventListener("pointermove", move); node.removeEventListener("pointerleave", reset); media.removeEventListener("change", reset); };
  }, []);
  return <div ref={ref} className={`orbit-motion ${className}`}>{children}</div>;
}
export function OrbitGraphic({ compact = false }: { compact?: boolean }) {
  const { locale } = useSitePreferences();
  return <div className={`orbit-graphic${compact ? " compact" : ""}`} aria-hidden="true"><div className="orbital-ring ring-a"><i /></div><div className="orbital-ring ring-b"><i /></div><div className="orbital-ring ring-c"><i /></div><div className="orbital-core">O<span>{locale === "ar" ? "لينكس" : "LINKS"}</span></div><span className="orbital-coordinate coord-a">{locale === "ar" ? "إشارة / 01" : "SIGNAL / 01"}</span><span className="orbital-coordinate coord-b">{locale === "ar" ? "اتصال / ∞" : "CONNECTED / \u221e"}</span></div>;
}
