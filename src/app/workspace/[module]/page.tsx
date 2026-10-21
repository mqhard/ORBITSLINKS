import { moduleIds } from "@/content/workspace";
import { Workspace } from "@/components/workspace";
export function generateStaticParams() { return moduleIds.map(module => ({ module })); }
export const dynamicParams = false;
export default async function Page({ params }: { params: Promise<{ module: string }> }) { const { module } = await params; return <Workspace moduleId={module} />; }
