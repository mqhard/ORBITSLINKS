import { Suspense } from 'react';
import { Workspace } from '@/components/workspace';
import { BuildWorkspace } from '@/components/build/build-workspace';
export default function Page() { return <Workspace moduleId="builds"><Suspense fallback={null}><BuildWorkspace /></Suspense></Workspace>; }
