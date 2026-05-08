import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Barcelona Bar NYC | There Is No I In Shot",
  description:
    "Hell's Kitchen's home of 100+ theatrical themed shots since 2005. Harry Potter, Full Metal Jacket, Pokemon and more — props, costumes, and soundtracks included. 923 8th Ave, NYC.",
  keywords: ["Barcelona Bar NYC", "themed shots NYC", "Hell's Kitchen bar", "Harry Potter shot", "shot bar NYC"],
  openGraph: {
    title: "Barcelona Bar NYC | There Is No I In Shot",
    description: "100+ theatrical themed shots. Props, costumes, and soundtracks included.",
    siteName: "Barcelona Bar NYC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F0E8] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
