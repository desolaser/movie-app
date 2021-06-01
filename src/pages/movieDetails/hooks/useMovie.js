import { useEffect, useState } from 'react'

const useMovie = movieId => {
  const [movie, setMovie] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetchMovie()
  }, [])
  
  const fetchMovie = () => {
    const imageSize = "w300"
    const link = 
      `${process.env.REACT_APP_API}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US` 
    fetch(link)
      .then(response => response.json())
      .then(data => {
        setMovie({
          ...data,
          image_url: `${process.env.REACT_APP_IMAGE_API}/${imageSize}/${data.poster_path}`
        })
        setLoading(false)
      })
      .catch(({ status_message }) => setError(status_message))
  }

  return [ movie, { loading, error }]
}

export default useMovie