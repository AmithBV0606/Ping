import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  const { pathname } = request.nextUrl;

  const isAuth = !!token; // "true" if token exists, "false" if token doesn't exists.
  const isProtectedRoute = ["/dashboard", "/chat"].includes(pathname);
  const isPublicRoute = ["/", "/sign-in", "/sign-up"].includes(pathname);

  // Unauthenticated user trying to access protected route
  if (!isAuth && isProtectedRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Authenticated user trying to access public route
  if (isAuth && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sign-in", "/sign-up", "/dashboard", "/chat"],
};
