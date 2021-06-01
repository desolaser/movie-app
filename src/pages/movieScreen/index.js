import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Movie from './movie'
import SearchBar from '../../components/searchBar'
import { logout } from '../../redux/slice/authSlice'

const MovieScreen = () => {
  const [input, setInput] = useState("")
  const [movies, page, setPage, totalPages] = useMovies(1)        
  const movieItems = getMoviesList(movies, input)
  const dispatch = useDispatch()

  return (
    <div className="min-vh-100">
      <h1 className="text-white p-4" align="center">Movies</h1>
      <button className="btn btn-warning float-right m-2" onClick={() => dispatch(logout())}>
        Logout
      </button>
      <SearchBar input={input} handleChange={e => setInput(e.target.value)} />
      <div className="row bg-white">
        <h1 className="col-12 my-4 text-center">Page: {page}</h1>
        {movieItems}
      </div>
      <div className="bg-dark row justify-content-center">
        {page !== 1 && (
          <>
            <button className="btn btn-primary m-2" onClick={() => setPage(1)}>
              {'<<'}
            </button>
            <button className="btn btn-primary m-2" onClick={() => setPage(page - 1)}>
              Previous
            </button>
          </>
        )}
        {page !== totalPages && (
          <>
            <button className="btn btn-primary m-2" onClick={() => setPage(page + 1)}>
              Next
            </button>
            <button className="btn btn-primary m-2" onClick={() => setPage(totalPages)}>
              {'>>'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

const useMovies = defaultPage => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(defaultPage)
  const [totalPages, setTotalPages] = useState(0)
  
  const language = "en-US"
  const link = 
    `${process.env.REACT_APP_API}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=${page}`

  const abortController  = new AbortController()

  const fetchMovies = () => {
    fetch(link, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        setTotalPages(data.total_pages)
      })
  }

  useEffect(() => {
    fetchMovies()
    return () => {
      abortController.abort()
    }
  }, [page])

  return [ movies, page, setPage, totalPages ]
}

const getMoviesList = (movies, input) => {    
  let filteredMovies = []
  input ?
    filteredMovies = movies.filter(movie => movie.title.includes(input)) :
    filteredMovies = movies

  const imageSize = "w185"
  const imageLink = `${process.env.REACT_APP_IMAGE_API}/${imageSize}/`

  const movieItems = filteredMovies.map(movie => (
    <Movie 
      key={movie.id} 
      id={movie.id} 
      image={imageLink + movie.poster_path} 
      title={movie.title}
    />
  ))

  return movieItems
}

export default MovieScreen