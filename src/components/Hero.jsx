import React from 'react';
import Form from './Form';
import './hero.css';
import video from '../assets/videos/video.mp4';
import poster from '../assets/images/poster.jpg';


const Hero = () => {
  return (
    <div className='hero'>
      <video src={video} autoPlay loop muted poster={poster}>
        <source src={video} type='video/mp4'/>
      </video>
      <h1>Find world class lazeez recipes.</h1>
      <Form/>
    </div>
  )
}


export default Hero