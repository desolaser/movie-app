import styled from 'styled-components'

const MovieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  
`

const RatingContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

export {
  MovieContainer,
  RatingContainer
}
