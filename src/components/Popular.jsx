import {React, useEffect, useState} from 'react'

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
                      <h2>{recipe.name}</h2>
                      <p></p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Popular