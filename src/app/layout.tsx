import type { Metadata } from "next";
import localFont from "next/font/local";
import { SitePreferencesProvider } from "@/components/site-preferences";
import "./globals.css";
import "./workspace.css";

const arabicFont = localFont({
  src: [
    { path: "./fonts/TheYearofHandicrafts-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/TheYearofHandicrafts-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-orbits-arabic",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

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
    <html className={arabicFont.variable} lang="ar" dir="rtl" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceBootstrap }} />
      </head>
      <body><SitePreferencesProvider>{children}</SitePreferencesProvider></body>
    </html>
  );
}
