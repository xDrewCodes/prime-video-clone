
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Movie(movie) {

    let navigate = useNavigate()

    return (
        <img loading="eager" className="movie skelly" src={movie.movie['#IMG_POSTER'] || null} alt={movie.movie['#TITLE'] || ""} onClick={() => navigate(`/movies/${movie.movie['#TITLE'].split(' ').join('')}`)} />
    )
}

export default Movie
