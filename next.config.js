/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com','randomuser.me', 'assets.acme.com'],
      },
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
        },
      ],
      experimental:{
        reactRoot: true,
        suppressHydrationWarning: true,
      },
}

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig