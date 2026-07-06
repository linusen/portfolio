import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "project-access";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get("password");
  const next = (formData.get("next") as string) || "/";

  const correct = password === process.env.PROJECT_GATE_PASSWORD;

  if (!correct) {
    const url = request.nextUrl.clone();
    url.pathname = "/gate";
    url.search = `?next=${encodeURIComponent(next)}&error=1`;
    return NextResponse.redirect(url);
  }

  const response = NextResponse.redirect(new URL(next, request.url));
  response.cookies.set(COOKIE_NAME, "granted", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}