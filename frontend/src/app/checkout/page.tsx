"use client";

import { DrinkContext } from "@/app/Contexts/DrinkContextComponent";
import { useContext } from "react";
import { DrinkImage } from "@/components/ui/drink";

export default function CheckoutPage() {

  const {counts} = useContext(DrinkContext);
  return (
    <div>
      <h1>Order</h1>
      <p>Drinks:</p>
      <ul>
        <li>Hansa: {counts['Hansa']}</li>
        <li>Gin & Tonic: {counts['Gin & Tonic']}</li>
        <li>Amaretto Sour: {counts['Amaretto Sour']}</li>
      </ul>
    </div>
  );
};