import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Head from './components/Head';
import Filter from './components/Filter';
import AddFavourite from './components/AddFavourite';
import RemoveFromMovieCard from './components/RemoveFromMovieCard';
import MovieCard from './components/MovieCard';


const App = () => {
    const [movies, setMovies] = useState([
        {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "Action",
        Rate:4,
        Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        Title: "Batman: The Dark Knight Returns, Part 1",
        Year: "2012",
        imdbID: "tt2313197",
        Type: "Action",
        Rate: 4,
        Poster: "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
    },
{
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "tt0468569",
    Type: "Action",
    Rate: 5,
    Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
}, {
    Title: "The Dark Knight Rises",
    Year: "2012",
    imdbID: "tt1345836",
    Type: "Action",
    Rate: 5,
    Poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"
},{
  Title: "The Revenant",
  Year: "2015",
  imdbID: "tt1663202",
  Type: "Adventure",
  Rate: 5,
  Poster: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  }, ]);
    const [searchValue, setSearchValue] = useState('');
    const [newRate, setNewRate] = useState(1)
    const [Favourites, setFavourites] = useState([]);
    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`; 
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }

    };
    const setRate = (Rate) =>{
        setNewRate (Rate);
    }
    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
        setFavourites(movieFavourites);},[]);
    const saveToLocalStorage = (items)=> {
          localStorage.setItem('react-movie-app-favourites',JSON.stringify(items))
    }
    const AddFavouriteMovie = (movie) => {
        const newFavouriteList = [...Favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };
    const RemoveMovie = (movie) => {
        const newFavouriteList = Favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
        setFavourites(newFavouriteList);
    };
    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <Head heading='Movies Card' />
                <Filter searchValue={searchValue} setSearchValue={setSearchValue}
                 setRate={setRate} newRate={newRate} />
                <MovieList movies={movies.filter(el => el.rate >= newRate
                )} /> 
            </div>
            <div className='row'>
                <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie}
                    favouriteFilm={AddFavourite} />
            </div>
            < div className='row d-flex align-items-center mt-4 mb-4' >
                < Head heading='Favourites' />
            </div>
            < div className='row' >
                < MovieList movies={Favourites}
                    handleFavouritesClick = {RemoveMovie}
                    favouriteFilm={RemoveFromMovieCard} />
            </div>
        </div>
    );
};

export default App;
