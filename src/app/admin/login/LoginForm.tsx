"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-peach text-dark font-bold py-3 px-4 hover:bg-peach-2 transition-colors disabled:opacity-50"
    >
      {pending ? "Přihlašování…" : "Přihlásit se"}
    </button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(loginAction, { error: "" });

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm text-white/50 mb-1.5">
          Uživatelské jméno
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          className="w-full bg-white/[0.06] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-peach transition-colors"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm text-white/50 mb-1.5">
          Heslo
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full bg-white/[0.06] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-peach transition-colors"
        />
      </div>
      {state.error && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}
      <SubmitButton />
    </form>
  );
}
