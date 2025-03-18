
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Movie(movie) {

    let navigate = useNavigate()

    return (
        <img loading="eager" src={movie.movie['#IMG_POSTER'] || ""} alt={movie.movie['#TITLE'] || ""} onClick={() => navigate(`/movies/${movie.movie['#TITLE'].split(' ').join('')}`)} />
    )
}

export default Movie
