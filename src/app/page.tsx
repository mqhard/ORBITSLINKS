import { HomepageHero } from "@/components/homepage-hero";
import { HomepageSections } from "@/components/homepage-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { OrbitMotion } from "@/components/orbit-motion";

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content">
        <OrbitMotion className="hero-motion"><HomepageHero /></OrbitMotion>
        <HomepageSections />
      </main>
      <SiteFooter />
    </>
  );
}
