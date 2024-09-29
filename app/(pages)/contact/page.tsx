import React from 'react'
import { Metadata } from 'next';
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default function Page() {
  return (
    <div>Contact Page here</div>
  )
}


// Static metadata
export const metadata: Metadata = {
  title: `Conatct - Washington portfolio website`,
  description: "Nextjs Animated Portfolio with Framer Motion",
  icons: {
    icon: "/logo/logo-16.png"
  },
  openGraph: mergeOpenGraph({
    title: "Washington Karanja Portfolio",
    url: '/'
  })
};

// Dynamic metadata open graph
