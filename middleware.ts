import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
 
  const token = request.cookies.get('auth-token')?.value;
  const { pathname } = request.nextUrl;
 
  if (!token && pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

 
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

 
export const config = {
  matcher: [
    '/dashboard/:path*',   
    '/profile/:path*',     
    '/login',
    '/register',
  ],
};

// export const config = {
//   matcher: [
     
//     '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf)).*)',
//     '/dashboard/:path*',
//     '/profile/:path*',
//     '/admin/:path*',
//   ],
// };