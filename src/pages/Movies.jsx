import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'

function Movies() {
    const [moviesList, setMoviesList] = useState([])

    async function searchMovies() {
        const queries = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
        const requests = []

        queries.forEach(query => {
            const options = {
                method: 'GET',
                url: 'https://imdb.iamidiotareyoutoo.com/search',
                params: { q: query }
            }
            requests.push(axios.request(options))
        })

        try {
            const responses = await Promise.all(requests)
            const movies = responses.flatMap(response => response.data.description)
            setMoviesList(movies)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        searchMovies()
    }, [])

    // Helper function to chunk the moviesList into groups of 5
    const chunkMovies = (movies, chunkSize) => {
        const chunks = []
        for (let i = 0; i < movies.length; i += chunkSize) {
            chunks.push(movies.slice(i, i + chunkSize))
        }
        return chunks
    }

    return (
        <div>
            {
                moviesList.length > 0 ?
                chunkMovies(moviesList, 11).map((chunk, index) => (
                    <MovieList key={index} title={`Movies ${index + 1}`} list={chunk} />
                ))
                :
                //New Array(10).fill(0).map()
                ''
            }
        </div>
    )
}

export default Movies
