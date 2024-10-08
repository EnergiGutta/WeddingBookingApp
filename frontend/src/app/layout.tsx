import type { Metadata } from "next";
import "./globals.css";

import { Forum } from 'next/font/google'
import Navbar from "@/components/ui/navbar";

import { DrinkImage } from "@/components/ui/drink";
 
const forum = Forum({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: "Bar booking",
  description: "Selin & Erlend bar booking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={forum.className}>
      <Navbar></Navbar>
        {children}
        <div style={{ height: '40px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '80%', margin: '0 auto' }}>
          <DrinkImage title="Hansa" imageName={"hansa.png"}></DrinkImage>
          <DrinkImage title="Gin & Tonic" imageName={"gin_tonic.png"}></DrinkImage>
          <DrinkImage title="Amaretto Sour" imageName={"amaretto_sour.png"}></DrinkImage>
        </div>
      </body>
    </html>
  );
}
