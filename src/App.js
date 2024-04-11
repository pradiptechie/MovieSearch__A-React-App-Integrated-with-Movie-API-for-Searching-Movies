import React, { useEffect, useState } from "react";

import './App.css';
import serachIcon from './search.svg'

import MovieComponent from "./movieComponent";


const apiurl = process.env.REACT_APP_API_URL;
// const movie1 = {
//   // "Poster": "N/A",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//   "Title":"The Avengers",
//   "Type":"movie",
//   "Year":"2012",
//   "imdbID":"tt0848228"
// }

const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');

  const serachMovie = async (title) =>{
    const response = await fetch (`${apiurl}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(()=>{
    serachMovie('Avengers');

  }, [])

  return(
    <div className="app">
      <h1>MovieSearch</h1>
      
      <div className="search">
        <input placeholder="Search any movies"
        value={searchString}
        onChange={(e)=>setSearchString(e.target.value)}
        />
        <img
        src={serachIcon}
        alt="searchIcon"
        onClick={()=>serachMovie(searchString)}
        />
      </div>
      {
        movies?.length > 0 ? (
          <div className="container">
            {/* <MovieComponent movie1={movie1}/> */}
            {/* <MovieComponent movie1={movies[1]}/> */}
          {
            movies.map((movie)=>(
              <MovieComponent movie = {movie} />
            ))
          }
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found !</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;