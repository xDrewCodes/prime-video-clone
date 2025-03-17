
import React from 'react'
import Movie from './Movie'

function MovieList({ title, list }) {
    return (
        <div className="movie__list--container">
            <div className="movie__list--title">{title}</div>
            <div className="movie__list--movies">
                {
                    list.map((movie, index) => {
                        return <Movie movie={movie} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default MovieList
