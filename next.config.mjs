/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/eps",
    assetPrefix: "/eps",
    reactStrictMode: true,
    images: { unoptimized: true }
};

export default nextConfig;
