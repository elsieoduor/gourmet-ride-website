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
  title: "Gourmet Ride",
  description: "A journey filled with taste",
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
