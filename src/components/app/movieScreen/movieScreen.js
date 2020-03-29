import React, { useState } from 'react'
import './movieScreen.css'
import SearchBar from './searchBar'

const MovieScreen = (props) => {
    const [input, setInput] = useState("")

    const handleChange = e => setInput(e.target.value)

    return(
        <div className="min-vh-100">
            <div className="justify-contents-center align-items-center">
                <h1 className="text-white" align="center">Movies</h1>
            </div>
            <SearchBar input={input} handleChange={handleChange}/>
            <div className="movies">

            </div>
        </div>
    )
}

export default MovieScreen