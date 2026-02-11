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

        <div id="content">
        <header>
          <a id="logo_link" href="/">
          <img className="logo" src="/images/ydps-logo-removedbg.png" alt="YDPS logo" />
        </a>
        <nav>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
          <a id="login" href="/login">Login</a>
        </nav>
        </header>
        
        {children}

        <footer>
          <div id="footer-left">
          <div id="footer-left1">
            <a id="logo_link" href="/">
              <img className="logo" src="/images/ydps-logo-removedbg.png" alt="YDPS logo"/>
            </a>
            <p id="copyright">&copy; 2025 YDPS All rights reserved.</p>
          </div>
          <p id="created">Website created by Kosei Hatakenaka</p>
        </div>
        <p id="footer-line"></p>
        <div id="footer-right">
        <p>Phone Number: +639660866698</p>
        <p>Email: ydps@gmail.com</p>
        <p>Location: Mohon, Talisay, Cebu Ph, 6045</p>
        </div>
        </footer>
      </div>
      </body>
    </html>
  );
}