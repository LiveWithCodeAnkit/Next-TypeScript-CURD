
"use-client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "./auth";

export function middleware(request: NextRequest) {

  if (typeof window === "undefined") return null;
  const loggedIn = localStorage.getItem("Authenticate");
  
// setTimeout(() => {
//     window.location.reload()
//   }, 1000);
  
  // if (loggedIn=="true") {
  //   return;
  // }
  // if (request.nextUrl.pathname.startsWith("/profile")) {
  //   return NextResponse.rewrite(new URL("/login", request.url));
  // }
}
