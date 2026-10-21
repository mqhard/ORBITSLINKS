import type { Locale } from "./homepage";

type NavigationItem = {
  id: string;
  label: Record<Locale, string>;
  href: string;
  pending?: boolean;
  menu?: "platform" | "solutions";
};

// Shared public navigation. Pending routes stay non-navigable until implemented.
export const publicNavigation: NavigationItem[] = [
  { id: "platform", label: { ar: "المنصة", en: "Platform" }, href: "/#platform", menu: "platform" },
  { id: "solutions", label: { ar: "الحلول", en: "Solutions" }, href: "/#solutions", menu: "solutions" },
  { id: "apps", label: { ar: "التطبيقات", en: "Apps" }, href: "/apps", pending: true },
  { id: "community", label: { ar: "المجتمع", en: "Community" }, href: "/community", pending: true },
  { id: "resources", label: { ar: "الموارد", en: "Resources" }, href: "/#resources" },
  { id: "enterprise", label: { ar: "للمؤسسات", en: "Enterprise" }, href: "/information/enterprise/" },
  { id: "plans", label: { ar: "الخطط", en: "Plans" }, href: "/plans/" },
];

export const headerActions = {
  login: { label: { ar: "تسجيل الدخول", en: "Login" }, href: null },
  workspace: { label: { ar: "مساحة العمل", en: "Workspace" }, href: "/workspace/home/" },
  start: { label: { ar: "ابدأ مجاناً", en: "Start Free" }, href: "/start/" },
} as const;

export const solutionNavigation = [
  { href: "/workspace/seo/", label: { ar: "نمِّ حضورك في البحث", en: "Grow search visibility" } },
  { href: "/workspace/ai/", label: { ar: "كن جزءًا من إجابات AI", en: "Be part of AI answers" } },
  { href: "/workspace/automations/", label: { ar: "أتمت مسار النمو", en: "Automate your growth workflow" } },
  { href: "/workspace/content/", label: { ar: "من الفكرة إلى المحتوى", en: "From idea to content" } },
];
