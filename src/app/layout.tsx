import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MrPugPug",
  description: "MrPugPug's website",
  openGraph: {
    title: "MrPugPug",
    description: "MrPugPug's website",
    url: "https://mrpugpug.com",
    siteName: "MrPugPug's website",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "MrPugPug",
    description: "MrPugPug's website",
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
