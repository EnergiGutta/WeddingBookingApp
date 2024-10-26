import type { Metadata } from "next";
import "./globals.css";

import { Forum } from 'next/font/google'
import Navbar from "@/components/ui/navbar";
import { DrinkContextComponent as DrinkContextComponent } from "./Contexts/DrinkContextComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

 
const forum = Forum({ subsets: ['latin'], weight: "400" })


const metadata: Metadata = {
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
      <body>
      <div className={forum.className}>
        <Navbar />
        <DrinkContextComponent>
          {children}
          <Button asChild>
        <Link href="/order">Order</Link>
          </Button>
        </DrinkContextComponent>
      </div>
      </body>
    </html>
  );
}