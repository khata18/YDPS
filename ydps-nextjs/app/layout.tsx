import type { Metadata } from "next";
import { Roboto, Rubik } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YDPS Water Company",
  description: "Water utility service in Cebu and Mindanao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${rubik.className}`}>
        {children}
      </body>
    </html>
  );
}