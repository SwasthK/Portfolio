import withPlaiceholder from "@plaiceholder/next";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codelabsystems.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.olivierlarose.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "st2.depositphotos.com",
        pathname: "/**",
      },
    ],
  }
};

export default withPlaiceholder(nextConfig);