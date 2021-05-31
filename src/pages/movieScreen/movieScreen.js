import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SearchBar from './searchBar'
import Movie from './movie'
import { logout } from '../../../actions'
import { apiKey } from '../../../constants'

const MovieScreen = () => {
    const [input, setInput] = useState("")
    const movies = useMovies()        
    const movieItems = getMoviesList(movies, input)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return(
        <div className="min-vh-100">
            <h1 className="text-white p-4" align="center">Movies</h1>
            <button className="btn btn-warning float-right m-2" onClick={handleLogout}>
                Logout
            </button>
            <SearchBar input={input} handleChange={e => setInput(e.target.value)}/>
            <div className="row bg-white">
                {movieItems}
            </div>
        </div>
    )
}

const useMovies = () => {
    const [movies, setMovies] = useState([])
    
    const language = "en-US"
    const page = 1
    const link = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`

    const abortController  = new AbortController()

    const fetchMovies = () => {
        fetch(link, { signal: abortController.signal })
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }

    useEffect(() => {
        fetchMovies()
        return () => {
            abortController.abort();
        };
    })

    return movies
}

const getMoviesList = (movies, input) => {    
    let filteredMovies = []
    input ?
        filteredMovies = movies.filter(movie => movie.title.includes(input)):
        filteredMovies = movies

    const imageSize = "w185"
    const imageLink = `https://image.tmdb.org/t/p/${imageSize}/`

    const movieItems = filteredMovies.map(movie => {
        return (
            <Movie 
                key={movie.id} 
                id={movie.id} 
                image={imageLink + movie.poster_path} 
                title={movie.title}
            />
        )
    })

    return movieItems
}

export default MovieScreen