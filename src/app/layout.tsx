import type { Metadata, Viewport } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Colonoscopy Companion — Your Guide to Colonoscopy Preparation",
    template: "%s | Colonoscopy Companion",
  },
  description:
    "Clear, friendly, evidence-based information to help you understand and prepare for your colonoscopy. Created by a Canadian gastroenterologist.",
  keywords: [
    "colonoscopy",
    "colonoscopy prep",
    "colonoscopy preparation",
    "colon cancer screening",
    "colonoscopy BC",
    "colonoscopy Canada",
    "what to expect colonoscopy",
    "colonoscopy prep instructions",
    "colonoscopy Vancouver",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Colonoscopy Companion",
  },
  metadataBase: new URL("https://colonoscopycompanion.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Colonoscopy Companion",
    description:
      "Your friendly guide to understanding and preparing for your colonoscopy.",
    type: "website",
    locale: "en_CA",
    siteName: "Colonoscopy Companion",
    url: "https://colonoscopycompanion.ca",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B6CB0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="bg-neutral-50 text-neutral-700 antialiased">
        <ServiceWorkerRegistration />
        <Analytics />
        <StructuredData />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
