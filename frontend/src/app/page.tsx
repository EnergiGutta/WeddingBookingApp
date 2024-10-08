'use client'
import React, { useEffect, useState } from 'react';

type Drink = {
  id: number;
  name: string;
  description: string;
}

type Image = {
  drink: number;
  image: string;
}

export default function Home() {
  const BACKEND_URL = 'http://localhost:8000'; // The backend base URL
  const [drinks, setDrinks] = useState<Drink[]>([]); // State for drinks as an array of Drink
  const [images, setImages] = useState<Image[]>([]); // State for image URL
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await fetch('http://127.0.0.1:8000/api/drinks');
        
        // Check if the response is ok (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Parse JSON data
        setDrinks(data); // Update state with fetched drinks

        const responseImages = await fetch('http://localhost:8000/api/drink_images');
        const dataImages = await responseImages.json();
        console.log(dataImages);
        setImages(dataImages);

      } catch (error) {
        console.error('Error fetching drinks:', error); // Log any errors
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchDrinks(); // Call the fetch function
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  const name = "utvikler"
  return ( <div className='flex flex-col gap-4'>
    <div>
    Hei {name}, vennligst bestill drikke nedenfor
    </div>

    <div>
    <h1 className='text-xl font-bold'>Drinks</h1>
    <div>
    {drinks.map((drink) => {
      // Find the image corresponding to the current drink
      const drinkImage = images.find(img => img.drink === drink.id);
      const fullImageUrl = `${BACKEND_URL}/${drinkImage?.image}`;

      return (
        <div key={drink.id}>
          <h2>{drink.name}</h2>
          <div>
            {/* Render the image if it exists */}
            {drinkImage ? (
              <img
                src={fullImageUrl}
                alt={drink.name}
                className='w-32 h-32'
              />
            ) : (
              <img 
                src = "drink_placeholder.png"
                alt = "Placeholder Drink"
                className = "w-32 h-32"
              /> // Fallback if no image is found
            )}
          </div>
          <h3>{drink.description}</h3>
          <button className='bg-green-500 text-white p-1 rounded'>Bestill</button>
          <hr className='my-4' />
        </div>
      );
    })}
    </div>
    </div>
    </div>
)}