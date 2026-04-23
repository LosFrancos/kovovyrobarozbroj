"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Formulář zatím není aktivní. Napište nám prosím přímo e-mailem.",
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Nová poptávka z webu Kovovýroba Rozbroj");
    data.append("from_name", "Web Kovovýroba Rozbroj");

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          json?.message ??
            "Odeslání se nepodařilo. Zkuste to prosím znovu nebo nám napište e-mail.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Odeslání se nepodařilo (problém se sítí). Zkuste to prosím znovu.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div
        className="p-10 bg-dark text-center"
        role="status"
        aria-live="polite"
      >
        <div className="text-peach text-5xl mb-4" aria-hidden="true">
          ✓
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-2">
          Zpráva odeslána!
        </h3>
        <p className="text-white/65 text-[15px]">Ozveme se vám co nejdříve.</p>
      </div>
    );
  }

  const disabled = status === "sending";
  const inputCls =
    "w-full px-4 py-3 border border-[#d0cdc8] bg-white text-dark outline-none focus:border-peach transition-colors disabled:opacity-60 disabled:cursor-not-allowed";
  const labelCls =
    "block font-sans font-medium text-xs tracking-[0.08em] text-ink-muted mb-1.5 uppercase";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* Honeypot — hidden field, bots často vyplní */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="jmeno" className={labelCls}>
          Jméno a příjmení *
        </label>
        <input
          id="jmeno"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={disabled}
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={disabled}
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="telefon" className={labelCls}>
          Telefon
        </label>
        <input
          id="telefon"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={disabled}
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="zprava" className={labelCls}>
          Popis poptávky *
        </label>
        <textarea
          id="zprava"
          name="message"
          required
          rows={5}
          disabled={disabled}
          placeholder="Co chcete vyrobit? Popište projekt, rozměry, materiál..."
          className={`${inputCls} resize-y`}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="text-sm text-[#b84a3a] bg-[#fbeae7] border border-[#f3cac3] px-4 py-3"
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="self-start bg-peach text-dark font-sans font-bold text-[15px] uppercase tracking-button px-8 py-4 min-h-[44px] hover:bg-peach-2 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {disabled ? "Odesílám…" : "Odeslat poptávku →"}
      </button>
    </form>
  );
}
