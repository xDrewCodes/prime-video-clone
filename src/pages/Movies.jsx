import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieList from '../components/MovieList';

function Movies() {
    const [moviesList, setMoviesList] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState(null);
    const [searchQuery, setSearchQuery] = useState(sessionStorage.getItem('searchQuery') || '');
    const [inputValue, setInputValue] = useState(sessionStorage.getItem('searchQuery') || '');

    async function searchMovies() {
        const queries = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
        const requests = [];

        queries.forEach(query => {
            const options = {
                method: 'GET',
                url: 'https://imdb.iamidiotareyoutoo.com/search',
                params: { q: query }
            }
            requests.push(axios.request(options));
        });

        try {
            const responses = await Promise.all(requests);
            const movies = responses.flatMap(response => response.data.description);
            setMoviesList(movies);
        } catch (error) {
            console.error(error);
        }
    }

    async function search(query) {
        setSearchQuery(query);
        if (query.trim()) {
            sessionStorage.setItem('searchQuery', query);
        } else {
            sessionStorage.removeItem('searchQuery');
        }

        const options = {
            method: 'GET',
            url: 'https://imdb.iamidiotareyoutoo.com/search',
            params: { q: query }
        };
        try {
            let response = await axios.request(options);
            setSearchedMovies(response.data.description);
        } catch (error) {
            console.error(error);
        }
    }

    // Monitor changes in searchQuery and update sessionStorage accordingly
    useEffect(() => {
        if (searchQuery) {
            sessionStorage.setItem('searchQuery', searchQuery);
        } else {
            sessionStorage.removeItem('searchQuery');
        }
    }, [searchQuery]);

    // Reset searchedMovies and searchQuery when close button is clicked
    const handleClose = () => {
        setSearchedMovies(null);
        setInputValue('');
        setSearchQuery(''); // Reset search query as well
    };

    useEffect(() => {
        if (searchQuery) {
            search(searchQuery); // Trigger search on initial load if there's a search query
        }
    }, [searchQuery]);

    useEffect(() => {
        searchMovies();
    }, []);

    const chunkMovies = (movies, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < movies.length; i += chunkSize) {
            chunks.push(movies.slice(i, i + chunkSize));
        }
        return chunks;
    };

    let movielistTitles = [
        'Recent releases',
        'Popular movies',
        'Drama movies',
        'Documentaries',
        'Kids and family movies',
        'Action and adventure movies'
    ];

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
                            search(event.target.value);
                        }
                    }}
                    placeholder='Try "Twisters"'
                    type="text"
                />
                <button
                    className="movies__search--button"
                    onClick={() => search(inputValue)}
                >
                    Search
                </button>
            </div>

            {searchedMovies && (
                <>
                    <div className="movies__search--close" onClick={handleClose}>
                        <FontAwesomeIcon icon="circle-xmark" />
                    </div>
                    <MovieList title={`Results for: ${searchQuery}`} list={searchedMovies} />
                    <br />
                    <br />
                </>
            )}

            {moviesList.length > 0
                ? chunkMovies(moviesList.slice(0, 66), 22).map((chunk, index) => (
                    <MovieList key={index} title={movielistTitles[index]} list={chunk} />
                ))
                : movielistTitles.map((_, index) => (
                    <MovieList key={index} title={movielistTitles[index]} list={null} />
                ))}
        </div>
    );
}

export default Movies;
