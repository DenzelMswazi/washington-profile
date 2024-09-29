import type { Metadata } from "next";

// Default open graph

const defaultOpenGraph:Metadata['openGraph'] = {

    title: "Washington Karanja Portfolio",
    description: "Nextjs Animated Portfolio with Framer Motion",
    images: [
       {
         url:`${process.env.NEXT_PUBLIC_SERVER_URL}/images/og.png`
       }
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}`
}

// Dynamic open graph
export const mergeOpenGraph = (og?: Metadata['openGraph']) =>{
   return {
      ...defaultOpenGraph,
      ...og,
      images: og?.images ? og.images : defaultOpenGraph.images,
      title: og?.title ? og.title : defaultOpenGraph.title,
      url: og?.url ? og.url : defaultOpenGraph.url,
   }
}