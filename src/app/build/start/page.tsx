import { Suspense } from 'react';
import { BuildStart } from '@/components/build/build-start';
export default function Page() { return <Suspense fallback={null}><BuildStart /></Suspense>; }
