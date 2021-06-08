import { useState, useEffect } from 'react'

const useMovies = defaultPage => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(defaultPage)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [totalPages, setTotalPages] = useState(0)
  
  const language = "en-US"
  const link = 
    `${process.env.REACT_APP_API}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=${page}`
  const searchLink = 
    `${process.env.REACT_APP_API}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&query=${search}&page=${page}`
    
  const abortController  = new AbortController()

  const fetchMovies = () => {
    setLoading(true)
    fetch(search != '' ? searchLink : link, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        setTotalPages(data.total_pages)
        setLoading(false)
      })
      .catch(({ status_message }) => setError(status_message))
  }

  useEffect(() => {
    fetchMovies()
    return () => {
      abortController.abort()
    }
  }, [page])

  return [ 
    movies, 
    page, 
    setPage, 
    totalPages,
    search,
    setSearch,
    fetchMovies,
    {
      loading,
      error
    }
  ]
}

export default useMovies