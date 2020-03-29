import React, { useState } from 'react'
import SearchBar from './searchBar'
import Movie from './movie'

const MovieScreen = (props) => {
    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value)

    return(
        <div className="min-vh-100">
            <div className="justify-contents-center align-items-center">
                <h1 className="text-white p-4" align="center">Movies</h1>
            </div>
            <SearchBar input={input} handleChange={handleChange}/>
            <div className="movies">
                <Movie />
            </div>
        </div>
    )
}

export default MovieScreen