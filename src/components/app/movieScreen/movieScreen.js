import React, { useState, useEffect } from 'react'
import SearchBar from './searchBar'
import Movie from './movie'

const MovieScreen = (props) => {
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])

    const api_key = "fb8e05f07af673dda52762e34085ea92"
    const language = "en-US"
    const page = 1
    const link = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`

    const imageSize = "w185"
    const imageLink = `https://image.tmdb.org/t/p/${imageSize}/`

    const handleChange = e => setInput(e.target.value)

    useEffect(
        () => {
            fetch(link)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        }
    )

    let filteredMovies = []

    input ?
        filteredMovies = movies.filter(movie => movie.title.includes(input)):
        filteredMovies = movies
    
    const movieItems = filteredMovies.map(
        movie => {
            return (
                <Movie 
                    key={movie.id} 
                    image={imageLink + movie.poster_path} 
                    title={movie.title}
                />
            )
        }
    )

    return(
        <div className="min-vh-100">
            <h1 className="text-white p-4" align="center">Movies</h1>
            <button className="btn btn-warning float-right m-2" onClick={props.handleLogout}>
                Logout
            </button>
            <SearchBar input={input} handleChange={handleChange}/>
            <div className="row bg-white">
                {movieItems}
            </div>
        </div>
    )
}

export default MovieScreen