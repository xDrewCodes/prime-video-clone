import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'

function Movies() {
    const [moviesList, setMoviesList] = useState([])
    const [searchedMovies, setSearchedMovies] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [inputValue, setInputValue] = useState('')

    async function searchMovies() {
        const queries = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q']
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

    const chunkMovies = (movies, chunkSize) => {
        const chunks = []
        for (let i = 0; i < movies.length; i += chunkSize) {
            chunks.push(movies.slice(i, i + chunkSize))
        }
        return chunks
    }

    let movielistTitles = [
        'Recent releases',
        'Popular movies',
        'Drama movies',
        'Documentaries',
        'Kids and family movies',
        'Action and adventure movies'
    ]

    async function search(query) {
        setSearchQuery(query)

        const options = {
            method: 'GET',
            url: 'https://imdb.iamidiotareyoutoo.com/search',
            params: { q: query }
        }
        let response = await axios.request(options)
        setSearchedMovies(response.data.description)
    }

    return (
        <div className="movies__main">
            <div className="movies__search--section">
                <div className="movies__search--title">Search our catalogue of great movies</div>
                <input
                    className="movies__search--field"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            search(event.target.value || 'Twisters')
                        }
                    }}
                    placeholder='Try "Twisters"'
                    type="text"
                />
                <button
                    className="movies__search--button"
                    onClick={() => search(inputValue || 'Twisters')}
                >
                    Search
                </button>
            </div>

            {
                searchedMovies &&
                <>
                    <MovieList title={`Results for: ${searchQuery}`} list={searchedMovies.slice(0, 6)} />
                    <br />
                    <br />
                </>
            }
            {
                moviesList.length > 0 ?
                    chunkMovies(moviesList.slice(0, 66), 11).map((chunk, index) => (
                        <MovieList key={index} title={movielistTitles[index]} list={chunk} />
                    ))
                    :
                    movielistTitles.map((_, index) => (
                        <MovieList key={index} title={movielistTitles[index]} list={null} />
                    ))
            }
        </div>
    )
}

export default Movies
