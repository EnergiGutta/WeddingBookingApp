"use client";
import Image from "next/image";
import React from "react";

interface DrinkImageProps {
    title: string;
    imageName: string;
}

const DrinkImage: React.FC<DrinkImageProps> = ({ title, imageName }) => {
    const [count, setCount] = React.useState(0);
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{title}</h2>
            <Image 
            src={`/${imageName}`} 
            alt={imageName} 
            width={200} 
            height={200} 
            />
            <div style={{ marginTop: '10px' }}>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
            <span style={{ margin: '0 10px' }}>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
        
    );
};
export { DrinkImage };