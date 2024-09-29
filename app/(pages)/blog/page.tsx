import { Metadata } from 'next'
import React from 'react'
import { mergeOpenGraph } from "@/lib/mergeOpenGraph"

export default function Page() {
  return (
    <div>Blog page here</div>
  )
}

export const metadata: Metadata = {
  title: "Blog - Washington portfolio website",
  description: "Nextjs Animated Portfolio with Framer Motion",
  icons: {
    icon: "/logo/logo-16.png"
  },
  openGraph: mergeOpenGraph({
    title: "Washington Karanja Portfolio",
    url: '/'
  })
}
