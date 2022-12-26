import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
      getPopular()
    }, [])

    const getPopular  = async () => {
        const API_KEY = '25fa9b8c2ed24a0ab4cbc6d5f480b352'
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`)
        const data = await api.json()
        console.log(data)
        setPopular(data.recipes)
    }

  return (
    <div>
        {popular.map((recipe) => {
            return(
                <div key={recipe.id}>
                    <img src={recipe.image} alt="" />
                    <div className='recipe-title'>
                      <Link to={`/recipe/${recipe.id}`}>
                        <h2>{recipe.title}</h2>
                      </Link>
                      <p></p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Popular