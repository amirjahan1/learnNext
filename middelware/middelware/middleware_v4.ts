// middleware.ts
import { createGuard } from 'next-route-guard';
import type { NextRequest } from 'next/server';

export const { middleware, config } = createGuard({
  adapter: 'jose',
  secret: process.env.JWT_SECRET!,
  cookieName: 'token',
  protect: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/admin/:path*',
  ],
  public: ['/login', '/register', '/about', '/'],
  redirectTo: '/login',
  roles: {
    '/admin/:path*': ['admin', 'super_admin'],
    '/dashboard/settings/:path*': ['user', 'admin', 'super_admin'],
  },
});

//  npm install next-route-guard jose