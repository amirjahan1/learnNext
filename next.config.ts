import type { NextConfig } from 'next';
import withPWAInit from 'next-pwa';
 
const isDev = process.env.NODE_ENV === 'development';
 
const withPWA = withPWAInit({
  dest: 'public',       
  register: true,       
  skipWaiting: true,     
  disable: isDev,        
  sw: 'sw.js',           
  runtimeCaching: [      
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-cache',
        expiration: { maxEntries: 4, maxAgeSeconds: 365 * 24 * 60 * 60 }
      }
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: { maxEntries: 64, maxAgeSeconds: 30 * 24 * 60 * 60 }
      }
    }
  ]
});


const nextConfig: NextConfig = {
  /* config options here */
   turbopack: {},
  images: {
    remotePatterns : [
      {
        protocol:  "https",
        hostname: 'encrypted-tbn0.gstatic.com',
      }
    ]
  }
};

export default withPWA(nextConfig as any);
