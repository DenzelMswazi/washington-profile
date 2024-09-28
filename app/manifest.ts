import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Washington Karanja Portfolio",
    short_name: "Portfolio",
    description: "Nextjs Animated Portfolio with Framer Motion",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
        {
           src: "/logo/log-100.png",
           sizes: "100x100",
           type: "image/png"
        }
    ]
   }
}
