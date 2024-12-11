/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = withVideos({
  // Your existing Next.js configuration options here
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/Intimate-relationship",
  basePath: "/Intimate-relationship",
});

export default nextConfig;
