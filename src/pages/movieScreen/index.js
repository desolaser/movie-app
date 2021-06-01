import React, { useState, useEffect } from 'react'
import Movie from './movie'
import TopToolbar from '../../components/topToolbar'

const MovieScreen = () => {
  const [search, setSearch] = useState("")
  const [movies, page, setPage, totalPages] = useMovies(1)        
  const movieItems = getMoviesList(movies, search)

  return (
    <div className="min-vh-100">
      <h1 className="text-white p-4" align="center">Movies</h1>
      <TopToolbar search={search} handleChange={e => setSearch(e.target.value)} />
      <div className="row bg-white">
        <h1 className="col-12 my-4 text-center">Page: {page}</h1>
        {movieItems.length > 0 ? movieItems : (
          <h4 className="m-auto py-4">
            No movies found
          </h4>
        )}
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

const getMoviesList = (movies, search) => {    
  let filteredMovies = []
  search ?
    filteredMovies = movies.filter(movie => movie.title.includes(search)) :
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