import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Movies = props => {
      const {movies} = props
      const {Title,Runtime,Poster} = movies

      const navigate = useNavigate()

      const onBookMovieTicket = ()=>{
           navigate("/book-tickets")
       }
  return (
    <li style={{textAlign:"center"}} onClick={onBookMovieTicket}>
      <img src={Poster} alt="poster" className='poster' />
      <h2 className='movie-title'>Title: {Title}</h2>
      <span>Duration: {Runtime}</span>
    </li>
  )
}


export default Movies