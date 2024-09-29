import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        This is the main home page
        <Image width={100} height={100} alt="logo" src="/logo/logo-100.png"/>
    </main>
  );
}


export const metadata: Metadata = {
  title: "Home - Washington portfolio website",
  description: "Nextjs Animated Portfolio with Framer Motion",
  icons: {
    icon: "/logo/logo-16.png"
  },
  openGraph: mergeOpenGraph({
    title: "Washington Karanja Portfolio",
    url: '/'
  })
}