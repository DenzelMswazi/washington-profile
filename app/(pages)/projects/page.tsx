import { Metadata } from 'next';
import React from 'react'
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default function Page() {
  return (
    <div>Project Content here</div>
  )
}


// Static metadata
export const metadata: Metadata = {
  title: `Project - Washington portfolio website`,
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
