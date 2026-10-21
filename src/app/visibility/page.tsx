import type { Metadata } from "next";
import { VisibilityExperience } from "@/components/visibility/visibility-experience";

export const metadata: Metadata = {
  title: "Visibility — ORBITS LINKS",
  description: "Worlds of Knowledge and Capabilities. A connected visibility experience built around what you already have.",
  openGraph: {
    title: "Visibility — ORBITS LINKS",
    description: "What you have is the center. We build around it what makes you capable of more.",
    type: "website",
  },
};

export default function VisibilityPage() {
  return <VisibilityExperience />;
}
