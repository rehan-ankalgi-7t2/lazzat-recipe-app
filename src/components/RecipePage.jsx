import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
    const {id} = useParams();
    console.log(id);
    const [details, setDetails] = useState({});
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
      getRecipeDetails();
    }, [])
    

    const getRecipeDetails = async () => {
        const API_KEY = '25fa9b8c2ed24a0ab4cbc6d5f480b352';
        const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        const data = await api.json();
        console.log(data);
        setDetails(data);
        setIngredients(data.extendedIngredients)
    }

  return (
    <div>
        <h1>{details.title}</h1>
        <img src={details.image} alt="" />
        <h2>Ingredients</h2>
        {details ? ingredients.map(item => (
            <p key={item.id}>{item.original}</p>
        )) : {}}
        <h2>Instructions</h2>
        <div dangerouslySetInnerHTML={{ __html: details.instructions}}></div>
        <h2>Sammary of the recipe</h2>
        <div dangerouslySetInnerHTML={{ __html: details.summary }}></div>
    </div>
  )
}

export default RecipePage