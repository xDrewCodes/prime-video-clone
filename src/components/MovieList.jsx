
import React from 'react'
import Movie from './Movie'

function MovieList({ title, query }) {
    return (
        <div className="movie__list--container">
            <div className="movie__list--title">{title}</div>
            <div className="move__list--movies">
                <Movie movie={1} />
            </div>
        </div>
    )
}

export default MovieList
