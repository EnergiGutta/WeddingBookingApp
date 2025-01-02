'use client'
import React, { useEffect, useState } from 'react';

type Drink = {
  id: number;
  name: string;
  description: string;
  image: string | null;
}


export default function Home() {
  const BACKEND_URL = 'http://localhost:8000'; // The backend base URL

  const [drinks, setDrinks] = useState<Drink[]>([]); // State for drinks as an array of Drink
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await fetch(BACKEND_URL + '/api/drinks');
        
        // Check if the response is ok (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Parse JSON data
        setDrinks(data); // Update state with fetched drinks

      } catch (error) {
        console.error('Error fetching drinks:', error); // Log any errors
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchDrinks(); // Call the fetch function
  }, []);
  
  if (loading) {
    return <div>Loading...din dritt</div>;
  }

  const name = "utvikler"
  return ( <div className='flex flex-col gap-4'>
    <div>
    Hei {name}, vennligst bestill drikke nedenfor tulling
    </div>

    <div>
    <h1 className='text-xl font-bold'>Drinks</h1>
    <div>
    {drinks.map((drink) => {
      console.log(drink);
      const hasDrinkImage = drink.image !== null; // Check if the drink has an image
      var fullImageUrl = ""; 
      if (hasDrinkImage) {
        fullImageUrl = `${BACKEND_URL}/${drink.image}`;
      }
      

      return (
        <div key={drink.id}>
          <h2>{drink.name}</h2>
          <div>
            {/* Render the image if it exists */}
            {hasDrinkImage ? (
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