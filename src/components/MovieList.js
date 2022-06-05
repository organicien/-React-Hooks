import React from'react'
import MovieCard from './MovieCard'
 const MovieList = (props) => {
     const FavouriteFilm= props.favouriteFilm;
     return (
         <>
         {props.movies.map((movie,index) => 
         <div className='image-container d-flex justify-content-start m-3'>
             <img src={movie.Poster} alt='movie'></img>
             < div onClick = { () => props.handleFavouritesClick(movie)}
             className = 'overlay d-flex align-items-center justify-content-center' >
                 <FavouriteFilm/>
            </div>
            <div>
                     <MovieCard movie={movie} key={index}/>
            </div>
         </div>)}
         </>
     )

 }
 export default MovieList;