"use client";
import { useEffect, useState } from "react";
export type Profile = { domain: string; role: number; experience: number; goals: number[]; plan: string; market: string };
export type Run = { id: string; recipe: string; domain: string; at: string; summary: string };
export type Draft = { id: string; title: string; body: string; category: string; at: string };
export type OrbitState = { profile: Profile; saved: string[]; resolved: string[]; drafts: Draft[]; runs: Run[]; apps: string[]; schedules: Record<string, boolean> };
export const initialOrbitState: OrbitState = { profile: { domain: "", role: -1, experience: -1, goals: [], plan: "Explorer", market: "SA" }, saved: [], resolved: [], drafts: [], runs: [], apps: [], schedules: {} };
const key = "orbits-workspace-v2";
export function readOrbitState(): OrbitState {
  try { const value = JSON.parse(localStorage.getItem(key) || "null"); return value && value.profile ? { ...initialOrbitState, ...value, profile: { ...initialOrbitState.profile, ...value.profile } } : initialOrbitState; } catch { return initialOrbitState; }
}
export function saveOrbitState(update: (state: OrbitState) => OrbitState) {
  const next = update(readOrbitState());
  try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* In-memory event still updates the active view. */ }
  window.dispatchEvent(new CustomEvent("orbit-change", { detail: next }));
  return next;
}
export function useOrbitState() {
  const [state, setState] = useState(initialOrbitState);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setState(readOrbitState()); setReady(true);
    const update = (event: Event) => setState((event as CustomEvent<OrbitState>).detail || readOrbitState());
    window.addEventListener("orbit-change", update); window.addEventListener("storage", update);
    return () => { window.removeEventListener("orbit-change", update); window.removeEventListener("storage", update); };
  }, []);
  return { state, ready, update: saveOrbitState };
}
export function normalizeDomain(value: string) {
  try { const parsed = new URL(value.includes("://") ? value.trim() : `https://${value.trim()}`); return /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,63}$/i.test(parsed.hostname) ? parsed.hostname.toLowerCase() : ""; } catch { return ""; }
}
export function downloadReport(domain: string, rows: string[][], title: string) {
  const safe = (value: string) => `"${(/^[=+@-]/.test(value) ? "'" : "") + value.replaceAll('"', '""')}"`;
  const blob = new Blob(["\ufeff", [["ORBITS LINKS — DEMO DATA", domain, title], ...rows].map(row => row.map(safe).join(",")).join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = `orbits-${domain || "demo"}-${Date.now()}.csv`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
