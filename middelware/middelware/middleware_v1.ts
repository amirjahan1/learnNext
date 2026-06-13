// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_ROUTES = ['/dashboard', '/profile', '/admin'];
const PUBLIC_ONLY_ROUTES = ['/login', '/register', '/forgot-password'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  const isPublicOnlyRoute = PUBLIC_ONLY_ROUTES.includes(pathname);

 
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

 
  if (isPublicOnlyRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/admin/:path*', '/login', '/register'],
};