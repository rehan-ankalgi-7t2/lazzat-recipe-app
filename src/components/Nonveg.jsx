import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import './popular.css';

const Veggie = () => {

  const [carbs, setCarbs] = useState([]);

  useEffect(() => {
    getPopular()
  }, []);

  const getPopular  = async () => {
      const API_KEY = '25fa9b8c2ed24a0ab4cbc6d5f480b352';
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=8&tags=meat`);
      const data = await api.json();
      console.log(data);
      setCarbs(data.recipes);
  }

  return (
    <div className='popular'>
      {carbs.map((recipe) => {
            return(
                <RecipeCard key={recipe.id} recipe={recipe}/>
            )
        })}
    </div>
  )
}

export default Veggie;