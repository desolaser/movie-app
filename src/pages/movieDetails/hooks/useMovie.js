import { useEffect, useState } from 'react'

const useMovie = movieId => {
  const [movie, setMovie] = useState("")

  useEffect(() => {
    fetchMovie()
  }, [])
  
  const fetchMovie = async () => {
    const imageSize = "w300"
    const link = 
      `${process.env.REACT_APP_API}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US` 
    const data = await fetch(link)
    const response = await data.json()
    setMovie({
      ...response,
      image_url: `${process.env.REACT_APP_IMAGE_API}/${imageSize}/${response.poster_path}`
    })
  }

  return movie
}

export default useMovie