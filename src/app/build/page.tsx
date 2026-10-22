import type { Metadata } from 'next';
import { BuildLanding } from '@/components/build/build-landing';
export const metadata: Metadata = { title: 'ORBITS BUILD — From idea to launch', description: 'Start from where you are. Build only what your business needs.' };
export default function Page() { return <BuildLanding />; }
