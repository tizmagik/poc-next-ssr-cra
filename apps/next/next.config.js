/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => ({
    // any path that doesn't match in nextjs will fallback to "cra API"
    fallback: [
      {
        source: "/:path*",
        destination: "/cra/:path*",
      },
      {
        source: "/:path*",
        destination: "/cra/index.html",
      },
    ],
  }),
};

module.exports = nextConfig;
