import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shahkaar.store"),
  title: "Shahkaar — Heritage Ajrak & Artisanal Kurtas",
  description:
    "Shahkaar presents an exclusive heritage collection — authentic hand-blocked Ajrak and master-tailored kurtas, crafted with timeless South Asian artistry. Launching soon.",
  keywords: [
    "Shahkaar",
    "Ajrak",
    "Kurtas",
    "Heritage Collection",
    "Handcrafted Ajrak",
    "Artisanal Kurtas",
    "Masterpiece",
    "Traditional wear",
  ],
  authors: [{ name: "Shahkaar", url: "https://shahkaar.store" }],
  creator: "Shahkaar",
  publisher: "Shahkaar",
  alternates: {
    canonical: "https://shahkaar.store",
  },
  openGraph: {
    title: "Shahkaar — Coming Soon | A Masterpiece in the Making",
    description:
      "Exclusive luxury collection crafted for those who value timeless design and uncompromising quality. Be the first through the doors when shahkaar.store goes live.",
    url: "https://shahkaar.store",
    siteName: "Shahkaar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shahkaar — A Masterpiece in the Making (shahkaar.store)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahkaar — Coming Soon | shahkaar.store",
    description:
      "Exclusive luxury collection crafted for those who value timeless design and uncompromising quality.",
    creator: "@shahkaarstore",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} dark`}
    >
      <body className="min-h-screen bg-[#0A0608] text-[#FAF7F2] font-sans antialiased selection:bg-[#D4AF37]/25 selection:text-[#E7C96E]">
        {children}
      </body>
    </html>
  );
}
