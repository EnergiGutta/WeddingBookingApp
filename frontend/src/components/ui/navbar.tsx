"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  
    return (
    <>
    <div className="bg-emerald-800 px-4 flex items-center justify-between text-yellow-50 h-10">
    <div className="flex gap-4">
      <p>Logo</p>
      <p>Selin & Erlend</p>
    </div>
    <div className="flex items-center gap-2">
      <Image 
        src="/shopping_cart.svg" 
        alt="Shopping cart" 
        width={24}
        height={24}
        className="filter invert"
      />
      <Button asChild><Link href="/checkout">Buy!</Link></Button>
    </div>
    </div>
    </>

  )
}

export default Navbar