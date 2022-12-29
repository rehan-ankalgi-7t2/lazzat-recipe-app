import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import './popular.css';

const Desserts = () => {

  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    getPopular()
  }, []);

  const getPopular  = async () => {
      const API_KEY = '25fa9b8c2ed24a0ab4cbc6d5f480b352';
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=8&tags=dessert`);
      const data = await api.json();
      console.log(data);
      setDesserts(data.recipes);
  }

  return (
    <div className='popular'>
      {desserts.map((recipe) => {
            return(
                <RecipeCard key={recipe.id} recipe={recipe}/>
            )
        })}
    </div>
  )
}

export default Desserts;