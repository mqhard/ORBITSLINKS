import { InformationPage } from "@/components/information-page";
export function generateStaticParams() { return ["about", "enterprise", "privacy", "terms"].map(slug => ({ slug })); }
export const dynamicParams = false;
export default async function Page({ params }: { params: Promise<{ slug: "about" | "enterprise" | "privacy" | "terms" }> }) { const { slug } = await params; return <InformationPage slug={slug} />; }
