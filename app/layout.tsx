import type { Metadata } from "next";
import "./globals.css";
import { jose } from "./fonts";



export const metadata: Metadata = {
  metadataBase: new URL(`${ process.env.NEXT_PUBLIC_SERVER_URL }`),
  applicationName: 'Washington Karanja Portfolio',
  keywords: ['nextjs', 'software', 'websitedeveloper', 'denzelmswazi',],
  authors: [{ name: 'denzelmswazi', url:'https://github.com/DenzelMswazi'}],
  publisher: 'netlify',

  alternates: {
    canonical: '/',
    languages: {
      'en':'en'
    }
  },
   
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      noimageindex: false,
    }
  },
  manifest: `${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.webmanifest`,
  icons: {
    icon: "/logo/logo-16.png",
    shortcut: "/logo/logo-16.png",
    apple: "/logo/logo-16.png",
  },

   twitter: {
    card: "summary_large_image",
    title: "Washington Karanja Portfolio",
    description: "Nextjs Animated Portfolio with Framer Motion",
    siteId: "",
    creator: "denzelmswazi",
    images: [`${process.env.NEXT_PUBLIC_SERVER_URL}/images/og.png`]
   }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jose.className}
      >
        {children}
      </body>
    </html>
  );
}
