import type { Metadata } from "next";
import { AuthPage } from "@/components/auth-page";

export const metadata: Metadata = {
  title: "الحساب | ORBITS LINKS",
  description: "تسجيل الدخول وإنشاء حساب في ORBITS LINKS — Sign in or create an account.",
};

export default function Page() {
  return <AuthPage />;
}
