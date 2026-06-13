import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const { pathname } = request.nextUrl;

   if (country === 'IR' && pathname.startsWith('/en')) {
    const newUrl = new URL(pathname.replace('/en', '/fa'), request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};