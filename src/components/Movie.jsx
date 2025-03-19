
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Movie(movie) {

    let navigate = useNavigate()

    return (
        <img
        draggable="false"
        loading="eager"
        className="movie skelly"
        src={movie.movie['#IMG_POSTER'] || null}
        alt={movie.movie['#TITLE'] || ""}
        onClick={() => navigate(`/movies/${movie.movie['#IMDB_ID'].split(' ').join('')}`)} />
    )
}

export default Movie
