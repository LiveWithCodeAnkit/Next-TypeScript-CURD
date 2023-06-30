import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("Authenticate");
  if (!auth) {
    if (req.nextUrl.pathname.startsWith("/profile")) {
      return NextResponse.rewrite(new URL("/login",req.url));
    }
  } else {
    if (req.nextUrl.pathname.startsWith("/register") || req.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.rewrite(new URL("/profile",req.url));
    }
  }

  return NextResponse.next();
}
