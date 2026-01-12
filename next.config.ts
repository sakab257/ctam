import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/controle-technique-ivry.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/rdv-controle-technique-moto-ivry.html",
        destination: "/",
        permanent: true
      },
      {
        source: "/controle-technique-le-blanc-mesnil.html",
        destination: "/",
        permanent: true
      }
    ]
  },
};

export default nextConfig;
