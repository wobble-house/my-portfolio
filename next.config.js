module.exports = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    RESUME: process.env.RESUME,
  },
  images: {
    domains: [
      'www.rossalanford.com',
      'rossalanford.com',
      'dev.rossalanford.com',
      's3.amazonaws.com'
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
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; sandbox;",
    minimumCacheTTL: 60,
},
  typescript: {
    ignoreBuildErrors: true,
  }, 
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}