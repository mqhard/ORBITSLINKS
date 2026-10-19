import { HomepageHero } from "@/components/homepage-hero";
import { HomepageSections } from "@/components/homepage-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main id="main-content">
        <HomepageHero />
        <HomepageSections />
      </main>
      <SiteFooter />
    </>
  );
}
