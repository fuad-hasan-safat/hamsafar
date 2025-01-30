import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Dancing_Script, Exo_2, Playwrite_US_Modern } from "next/font/google";

// import {HeroUIProvider} from "@heroui/react";
import "./globals.css";
import Provider from "@/components/Provider";
import Flower from "@/components/Flower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const dancing_script = Dancing_Script({
  subsets: ['latin'],
  variable: '--dancing_script',
  weight: ["400", "500", "600", "700"]
});

const exo_2 = Exo_2({
  subsets: ['latin'],
  variable: "--exo_2",
  weight: ["400", "500", "600", "700"]
});

const playwrite = Playwrite_US_Modern({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["serif", "sans-serif"],
  variable: "--playwrite",
  weight: ["400", "100", "200", "300"]
});

export const metadata: Metadata = {
  title: "Ham Safar",
  description: "Safat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${dancing_script.variable} ${exo_2.variable} ${geistSans.variable} ${geistMono.variable} ${playwrite.variable}flex antialiased min-h-screen relative`}
      >
        <Provider>
          {children}
          <Flower/>
        </Provider>
      </body>
    </html>
  );
}
