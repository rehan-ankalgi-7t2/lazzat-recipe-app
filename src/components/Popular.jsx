import {React, useEffect, useState} from 'react'
import './popular.css';
import RecipeCard from './RecipeCard';

const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
      getPopular()
    }, [])

    const getPopular  = async () => {
        const API_KEY = '25fa9b8c2ed24a0ab4cbc6d5f480b352'
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=8`)
        const data = await api.json()
        console.log(data)
        setPopular(data.recipes)
    }

  return (
    <div className='popular'>
        {popular.map((recipe) => {
            return(
                <RecipeCard key={recipe.id} recipe={recipe}/>
            )
        })}
    </div>
  )
}

export default Popular