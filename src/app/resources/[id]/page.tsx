import { ResourceArticle } from "@/components/resource-article";
export function generateStaticParams() { return Array.from({ length: 9 }, (_, i) => ({ id: String(i + 1) })); }
export const dynamicParams = false;
export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <ResourceArticle index={Number(id) - 1} />; }
