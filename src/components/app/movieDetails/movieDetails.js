import React, { useEffect, useState } from 'react'
import { apiKey } from './constants'

const MovieDetails = ({match}) => {
    const movie = useMovie(match)

	return(		
		<div class="container-fluid min-vh-100">
            <div class="row min-vh-100 justify-content-center align-items-center">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="" />						
				</div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 bg-white">
					<p><b>Overview:</b> {movie.overview}</p>
					<p><b>Release date:</b> {movie.release_date}</p>
					<p><b>Vote average:</b> {movie.vote_average}</p>
					<p><b>Vote count:</b> {movie.vote_count}</p>
					<p><b>Original language:</b> {movie.original_language}</p>
                </div>
            </div>
        </div>
	);
}

const useMovie = match => {
    const [movie, setMovie] = useState("")

    useEffect(() => {
        fetchMovie()
    }, [])
    
    const fetchMovie = async () => {
        const link = 
            `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${apiKey}&language=en-US` 
        const data = await fetch(link)
        const response = await data.json()
        setMovie(response)
    }

    return movie
}

export default MovieDetails;