"use client";

import { DrinkImage } from "@/components/ui/drink";
import { drinkData } from "@/app/layout";

export default function OrderPage() {
  return (
    <div>
      <div style={{ height: '40px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '80%', margin: '0 auto' }}>
        {Object.values(drinkData.drinks).map((drink, index) => (
          <DrinkImage key={index} title={drink.view_string} imageName={drink.imageName} />
        ))}
      </div>
    </div>
  );
};