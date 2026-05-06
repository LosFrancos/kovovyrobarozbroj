import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Přihlášení",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <p className="text-white/25 text-xs uppercase tracking-[0.2em] text-center mb-10">
          Kovovýroba Rozbroj
        </p>
        <h1 className="text-white text-2xl font-bold text-center mb-8">
          Přihlášení
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
