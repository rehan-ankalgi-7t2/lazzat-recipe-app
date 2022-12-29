import React, { useState } from 'react';
import './form.css';

const Form = () => {

  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipeFromSearch();
  }

  const getRecipeFromSearch = async () => {
    const API_KEY = '25fa9b8c2ed24a0ab4cbc6d5f480b352'
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${value}`)
    const data = await api.json()
    console.log(data)
    setResults(data.results);
  }

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <input type="search" onChange={handleChange} value={value} placeholder='search for recipes'/>
        <input type="submit" value="search" />
    </form>
  )
}

export default Form