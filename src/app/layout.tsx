import type { Metadata } from "next";
import { SitePreferencesProvider } from "@/components/site-preferences";
import "./globals.css";
import "./workspace.css";

export const metadata: Metadata = {
  title: "ORBITS LINKS — Digital Visibility Intelligence",
  description:
    "Connect search, AI visibility, market intelligence, and digital authority in one decision system.",
  openGraph: {
    title: "ORBITS LINKS",
    description: "Digital visibility intelligence for every orbit where discovery happens.",
    type: "website",
  },
};

const preferenceBootstrap = `
  var locale = localStorage.getItem("orbits-locale");
  var theme = localStorage.getItem("orbits-theme") || "system";
  var dark = theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.lang = locale === "en" ? "en" : "ar";
  document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.documentElement.dataset.themePreference = theme;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceBootstrap }} />
      </head>
      <body><SitePreferencesProvider>{children}</SitePreferencesProvider></body>
    </html>
  );
}
