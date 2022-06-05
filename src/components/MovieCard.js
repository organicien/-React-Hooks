import React from 'react'
import ReactStars from 'react-stars';

 const MovieCard = ({ movie }) => {
    return (
        <div>
            <p style={{ color: '#60FFFF' }}>{movie.Title}</p>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
            <ReactStars
                count={5}
                size={20}
                color2={'#ffd700'}
                value={movie.Rate}
            />  
        </div>

    )
}
export default MovieCard;