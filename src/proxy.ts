import { NextRequest, NextResponse } from "next/server";

const PROTECTED_SLUGS = ["telenor-checkout", "telenor-guided-buying"];
const COOKIE_NAME = "project-access";
const TOKEN_PARAM = "key";

export function proxy(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl;

  // Magic link: ?key=... on ANY page grants access and cleans the URL
  const token = searchParams.get(TOKEN_PARAM);
  if (token && token === process.env.PROJECT_ACCESS_TOKEN) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete(TOKEN_PARAM);
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(COOKIE_NAME, "granted", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  }

  // Only the two protected project pages enforce the gate
  const isProtected = PROTECTED_SLUGS.some(
    (slug) => pathname === `/projects/${slug}`
  );
  if (!isProtected) return NextResponse.next();

  const hasAccess = request.cookies.get(COOKIE_NAME)?.value === "granted";
  if (hasAccess) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/gate";
  url.searchParams.set("next", pathname);
  const response = NextResponse.rewrite(url);
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};