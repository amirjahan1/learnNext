// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

const ROLE_ROUTES = {
  user: ['/dashboard', '/profile'],
  admin: ['/admin', '/admin/users', '/dashboard'],
  super_admin: ['/super-admin', '/admin', '/dashboard'],
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value;
  const { pathname } = request.nextUrl;

  if (!token) {
    if (pathname.startsWith('/login')) return NextResponse.next();
    return NextResponse.redirect(new URL('/login', request.url));
  }

  let userRole = 'user';
  try {
    const payload = await verifyToken(token);
    userRole = payload.role;
  } catch (error) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('session');
    return response;
  }

  let hasAccess = false;
  for (const [role, routes] of Object.entries(ROLE_ROUTES)) {
    if (userRole === role && routes.some(route => pathname.startsWith(route))) {
      hasAccess = true;
      break;
    }
  }

  if (pathname.startsWith('/admin') && userRole !== 'admin' && userRole !== 'super_admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (pathname.startsWith('/super-admin') && userRole !== 'super_admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (!hasAccess) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/super-admin/:path*', '/profile/:path*'],
};