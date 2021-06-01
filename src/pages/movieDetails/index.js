import React from 'react'
import { Link } from 'react-router-dom'
import useMovie from './hooks/useMovie'
import { MovieContainer, RatingContainer } from './elements'

const MovieDetails = ({ match }) => {
  const movie = useMovie(match.params.id)

	return (		
    <MovieContainer className="bg-white p-4 rounded row">
      <div className="col-xs-12 col-md-4">
        <img className="img-fluid" src={movie.image_url} alt="" />						
      </div>
      <div className="col-xs-12 col-md-8" style={{ position: "relative" }}>
        <p><b>Overview:</b> {movie.overview}</p>
        <p><b>Release date:</b> {movie.release_date}</p>
        <p><b>Original language:</b> {movie.original_language}</p>
        <RatingContainer className="row bg-dark text-white">
          <div className="bg-success col-xs-3 col-md-3">
            <h1>{movie.vote_average}</h1>
            <p>Rating</p>
          </div>
          <div className="col-xs-9 col-md-9 p-2">
            <p><b>Vote count:</b> {movie.vote_count}</p>
            <Link className="btn btn-warning float-right" to="/movies">Back</Link>
          </div>
        </RatingContainer>
      </div>
    </MovieContainer>
	)
}

export default MovieDetails;