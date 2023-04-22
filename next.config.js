module.exports = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RESUME: process.env.RESUME,
  },
  images: {
    domains: [
      'www.rossalanford.com',
      'rossalanford.com',
      'dev.rossalanford.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.rossalanford.com',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'http',
        hostname: 'rossalanford.com',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'http',
        hostname: 'dev.rossalanford.com',
        port: '80',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'www.rossalanford.com',
        port: '443',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'rossalanford.com',
        port: '443',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'dev.rossalanford.com',
        port: '443',
        pathname: '/***',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; sandbox;",
    minimumCacheTTL: 60,
},
  experimental: {
    appDir: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}