import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Responsive Combobox Components",
  description:
    "A collection of combobox components built with React, TypeScript, and shadcn/ui. Features responsive design with mobile drawer support, search functionality, and multi-select capabilities.",
  keywords: [
    "combobox",
    "multiselect",
    "combobox multi select",
    "shadcn",
    "ui components",
    "multi-select",
    "combobox select",
    "mobile drawer",
    "responsive combobox",
  ],
  authors: [{ name: "Matthias Rauch" }],
  creator: "Matthias Rauch",
  publisher: "Matthias Rauch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://matthiasmoke.github.io/advanced-combobox/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Combobox Components based on shadcn",
    description:
      "A collection of combobox components built with React, TypeScript, and shadcn/ui. Features responsive design with mobile drawer support, search functionality, and multi-select capabilities.",
    url: "https://matthiasmoke.github.io/advanced-combobox/",
    siteName: "Shadcn Combobox Components",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
