import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Anciennes URL du précédent site : redirigées (301) vers la page
    // équivalente pour conserver leur historique SEO local.
    return [
      {
        source: "/controle-technique-ivry.html",
        destination: "/ivry-sur-seine",
        permanent: true,
      },
      {
        source: "/rdv-controle-technique-moto-ivry.html",
        destination: "/ivry-sur-seine",
        permanent: true
      },
      {
        source: "/controle-technique-le-blanc-mesnil.html",
        destination: "/le-blanc-mesnil",
        permanent: true
      }
    ]
  },
};

export default nextConfig;
