'use client';
import { useEffect, useState } from 'react';
import type { BuildProject } from './build-model';
const key = 'orbits-builds-v1';
const eventName = 'orbits-build-change';
// Device-local data adapter. Replace this boundary with authenticated persistence later.
function readProjects(): BuildProject[] {
  const raw = localStorage.getItem(key);
  if (!raw) return [];
  const value = JSON.parse(raw);
  if (!Array.isArray(value) || !value.every(p => p && typeof p.id === 'string' && p.brief && Array.isArray(p.items) && Array.isArray(p.activity))) throw new Error('Invalid saved builds');
  return value;
}
export function useBuilds() {
  const [projects, setProjects] = useState<BuildProject[]>([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const sync = () => { try { setProjects(readProjects()); setError(false); } catch { setError(true); } setReady(true); };
    sync();
    window.addEventListener(eventName, sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener(eventName, sync); window.removeEventListener('storage', sync); };
  }, []);
  function save(project: BuildProject): boolean {
    try {
      const latest = readProjects();
      localStorage.setItem(key, JSON.stringify([project, ...latest.filter(p => p.id !== project.id)]));
      window.dispatchEvent(new Event(eventName));
      setError(false);
      return true;
    } catch { setError(true); return false; }
  }
  return { projects, ready, error, save };
}
