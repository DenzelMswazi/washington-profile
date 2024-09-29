import React from 'react'
import { useParams } from 'next/navigation'
import { Metadata } from 'next';
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default function Page() {

  const params = useParams();

  return (
    <div>
      Blog items here {params.slug}
      </div>
  )
}

// Static metadata
export const metadata: Metadata = {
  title: `Blog - Washington portfolio website`,
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
