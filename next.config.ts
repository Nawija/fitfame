import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1700],
        imageSizes: [16, 32, 48, 64, 96],
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.datocms-assets.com",
            },
        ],
    },
    theme: {
        extend: {
            colors: {
                black: "#000000",
                white: "#ffffff",
                gold: "#a58b34",
            },
        },
    },
};

export default nextConfig;
