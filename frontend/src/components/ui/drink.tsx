"use client";
import Image from "next/image";
import React from "react";
import { DrinkContext } from "@/app/Contexts/DrinkContextComponent";
import { useContext } from "react";

interface DrinkImageProps {
    title: string;
    imageName: string;
}

const DrinkImage: React.FC<DrinkImageProps> = ({ title, imageName }) => {
    const { counts, setCount } = useContext(DrinkContext);
    const count = counts[title] || 0;
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2>{title}</h2>
        <Image 
          src={`/${imageName}`} 
          alt={imageName} 
          width={200} 
          height={200} 
        />
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => setCount(title, count > 0 ? count - 1 : 0)}>-</button>
          <span style={{ margin: '0 10px' }}>{count}</span>
          <button onClick={() => setCount(title, count + 1)}>+</button>
        </div>
      </div>
    );
  };
export { DrinkImage };