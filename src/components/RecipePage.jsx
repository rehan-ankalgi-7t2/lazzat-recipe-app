import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './recipePage.css';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RecipePage = () => {
    const {id} = useParams();
    // console.log(id);
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
    <div className='recipe-details'>
      <Link to=".."><button className='back-btn'><ArrowBackIcon/></button></Link>
      <h1>{details.title}</h1>
      <div className="recipe-header">
        <img src={details.image} alt="" />
        <div className='recipe-details-stats'>
          <span className='like'>
              <FavoriteIcon/>
              <p>Likes: {details.aggregateLikes}</p>
          </span>
          <span className='health'>
              <MonitorHeartIcon/>
              <p>Health Score: {details.healthScore}</p>
          </span>
          <span className='servings'>
              <LocalDiningIcon/>
              <p>Servings: {details.servings}</p>
          </span>
        </div>
      </div>
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