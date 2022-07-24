/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    relay: {
      language: "typescript",
      src: "./src/",
      schema: "../gql/schema.graphql",
      artifactDirectory: "src/queries/__generated__",
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // @see https://webpack.js.org/configuration/resolve/#resolvefallback
    config.resolve.fallback = { fs: false, module: false, path: false };
    return config;
  },
};

module.exports = nextConfig;
