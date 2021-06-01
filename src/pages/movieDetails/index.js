import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movieDetails.css'

const MovieDetails = ({ match }) => {
  const movie = useMovie(match.params.id)

	return(		
    <div className="bg-white p-4 rounded row movie-details">
      <div className="col-xs-12 col-md-4">
        <img className="img-fluid" src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="" />						
      </div>
      <div className="col-xs-12 col-md-8" style={{ position: "relative" }}>
        <p><b>Overview:</b> {movie.overview}</p>
        <p><b>Release date:</b> {movie.release_date}</p>
        <p><b>Original language:</b> {movie.original_language}</p>
        <div className="row bg-dark text-white bottom-align-text">
          <div className="bg-success col-xs-3 col-md-3">
            <h1>{movie.vote_average}</h1>
            <p>Rating</p>
          </div>
          <div className="col-xs-9 col-md-9 p-2">
            <p><b>Vote count:</b> {movie.vote_count}</p>
            <Link className="btn btn-warning float-right" to="/movies">Back</Link>
          </div>
        </div>
      </div>
    </div>
	);
}

const useMovie = movieId => {
  const [movie, setMovie] = useState("")

  useEffect(() => {
    fetchMovie()
  }, [])
  
  const fetchMovie = async () => {
    const link = 
      `${process.env.REACT_APP_API}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US` 
    const data = await fetch(link)
    const response = await data.json()
    setMovie(response)
  }

  return movie
}

export default MovieDetails;