import React from 'react'
import { Link } from 'react-router-dom'
import './recipeCard.css';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe-card'>
        <div>
            <img src={recipe.image} alt="" />
            <div className='recipe-title'>
                <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                </Link>
                <div className='recipe-card-stats'>
                    <span className='like'>
                        <FavoriteIcon/>
                        {recipe.aggregateLikes}
                    </span>
                    <span className='health'>
                        <MonitorHeartIcon/>
                        {recipe.healthScore}
                    </span>
                    <span className='servings'>
                        <LocalDiningIcon/>
                        {recipe.servings}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard