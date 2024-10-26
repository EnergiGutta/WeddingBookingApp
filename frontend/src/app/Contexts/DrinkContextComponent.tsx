"use client";
import { useState, createContext } from 'react'
import React from 'react';
import { ReactNode } from 'react';


export const DrinkContext = createContext<{
  counts: { [key: string]: number };
  setCount: (title: string, count: number) => void;
}>({
  counts: {},
  setCount: () => {},
});



  interface DrinkContextComponentProps {
    children: ReactNode;
  }

  export const DrinkContextComponent: React.FC<DrinkContextComponentProps> = ({ children }) => {
    const [counts, setCounts] = useState({ 'Hansa': 0, 'Gin & Tonic': 0, 'Amaretto Sour': 0 });
  
    const setCount = (beverage: string, count: number) => {
      setCounts((prevCounts) => ({ ...prevCounts, [beverage]: count }));
    };
  
    return (
      <div>
        <DrinkContext.Provider value={{ counts, setCount }}>
          {children}
        </DrinkContext.Provider>
      </div>
    );
  }