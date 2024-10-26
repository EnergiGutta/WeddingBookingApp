"use client";

import { DrinkContext } from "@/app/Contexts/DrinkContextFile";
import { useContext } from "react";
import { DrinkImage } from "@/components/ui/drink";

export default function OrderPage() {

  const {counts} = useContext(DrinkContext);
  return (
    <div>
      <h1>Order</h1>
      <ul>
        <li>Hansa: {counts['Hansa']}</li>
        <li>Gin & Tonic: {counts['Gin & Tonic']}</li>
        <li>Amaretto Sour: {counts['Amaretto Sour']}</li>
      </ul>
      <DrinkImage title={"Hansa"} imageName={"hansa.png"} />
      <DrinkImage title={"Gin & Tonic"} imageName={"gin_tonic.png"} />
      <DrinkImage title={"Amaretto Sour"} imageName={"amaretto_sour.png"} />
    </div>
  );
}