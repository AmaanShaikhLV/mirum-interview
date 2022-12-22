import React from 'react';
import './style.css';
import PlaceholderImage from '../Image/placeholder.jpg';
import PropTypes from 'prop-types';

export default function Card({image,movieName,casts,director}) {
    const ImageErrorOccur = (e) =>
    {
        e.target.src = PlaceholderImage; 
    }
  return (
    <div className='movieCard'>
            <img src={image} className="movieImg" alt="" onError={ImageErrorOccur} height={400} width={350}/> 
            <label className='contentTitle'>Movie Name</label>
            <label className='contentDesc'>{movieName}</label>
            <label className='contentTitle'>Starring</label>
            <label className='contentDesc'>{casts}</label>
            <label className='contentTitle'>Director</label>
            <label className='contentDesc'>{director}</label>
    </div>
  )
}

Card.prototype = {
    image: PropTypes.string.isRequired,
    movieName: PropTypes.string.isRequired,
    casts: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
  };