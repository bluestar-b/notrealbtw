import { Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gaslighting professional for hire",
  description: "not real btw",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased container mx-auto px-8`}
      >
    
        {children}
        <Footer/>
      </body>
    </html>
  );
}
