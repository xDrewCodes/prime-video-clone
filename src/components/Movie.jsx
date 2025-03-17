
import React from 'react'

function Movie(movie) {
    return (
        <img src={movie.movie['#IMG_POSTER']} alt={movie.movie['#TITLE']}/>
    )
}

export default Movie
