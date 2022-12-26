import React from 'react';
import './form.css';

const Form = () => {
  return (
    <form className='searchbar'>
        <input type="search" placeholder='search for recipes'/>
        <input type="submit" value="search" />
    </form>
  )
}

export default Form