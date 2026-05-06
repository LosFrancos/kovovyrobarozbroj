"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createSessionToken, COOKIE_NAME } from "@/lib/auth";
import { checkRateLimit, resetRateLimit } from "@/lib/rateLimit";

export async function loginAction(
  _prevState: { error: string },
  formData: FormData
): Promise<{ error: string }> {
  const ip =
    headers().get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return { error: "Příliš mnoho pokusů. Zkuste to za 15 minut." };
  }

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validUsername = username === process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD_HASH
    ? await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)
    : false;

  if (!validUsername || !validPassword) {
    return { error: "Nesprávné přihlašovací údaje." };
  }

  resetRateLimit(ip);

  const token = await createSessionToken();
  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  redirect("/admin");
}

export async function logoutAction() {
  cookies().delete(COOKIE_NAME);
  redirect("/admin/login");
}
