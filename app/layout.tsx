import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Poppins, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const outfit = Outfit({subsets:['latin']})
const man = Manrope({subsets:['latin']})
const poppins = Poppins({subsets:['latin'], weight:['100', '200','300']})

export const metadata: Metadata = {
  title: "Gourmet Ride | Culinary Adventures & Food Experiences",
  description: "Discover Gourmet Ride – your guide to unique culinary journeys, food tours, and taste adventures. Explore top destinations, local flavors, and unforgettable dining experiences.",
  keywords: [
    "Gourmet Ride",
    "food tours",
    "culinary adventures",
    "taste experiences",
    "food travel",
    "local cuisine",
    "dining experiences",
    "food destinations"
  ],
  openGraph: {
    title: "Gourmet Ride | Culinary Adventures & Food Experiences",
    description: "Explore the world through taste with Gourmet Ride. Find the best food tours, local flavors, and dining experiences.",
    url: "https://gourmet-ride-website.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gourmet Ride - Culinary Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourmet Ride | Culinary Adventures & Food Experiences",
    description: "Discover unique food tours and taste adventures with Gourmet Ride.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={man.className}
      >
        {children}
      </body>
    </html>
  );
}
