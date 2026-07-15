import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "I-Tales — Java, DevOps, CI/CD & OpenShift consulting",
  description:
      "IT consulting studio based in Belgium, specialized in Java, DevOps, CI/CD and OpenShift.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
      >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-white font-body text-dusk">
      <Navbar />
      <main className="flex-1">{children}</main>
      </body>
      </html>
  );
}