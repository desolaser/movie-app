import React from 'react'
import TopToolbar from '../../components/topToolbar'
import BottomToolbar from './components/bottomToolbar'
import Movie from './components/movie'
import useMovies from './hooks/useMovies'

const MovieScreen = () => {
  const [
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
  ] = useMovies(1)        
  const movieItems = getMoviesList(movies, search)

  return (
    <div className="min-vh-100">
      <h1 className="text-white p-4" align="center">Movies</h1>
      <TopToolbar
        search={search}
        handleChange={e => setSearch(e.target.value)}
        handleSearch={fetchMovies}
      />
      <div className="row bg-white">
        {error ? 
          <h4 className="m-auto py-4">
            {error}
          </h4>
        : 
          loading && <h4 className="m-auto py-4">
            Loading data, please wait a second
          </h4>
        }
        <h1 className="col-12 my-4 text-center">Page: {page}</h1>
        {movieItems.length > 0 ? movieItems : (
          <h4 className="m-auto py-4">
            No movies found
          </h4>
        )}
      </div>
      <BottomToolbar
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />      
    </div>
  )
}

const getMoviesList = movies => {
  const imageSize = "w185"
  const imageLink = `${process.env.REACT_APP_IMAGE_API}/${imageSize}/`

  const movieItems = movies.map(movie => (
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