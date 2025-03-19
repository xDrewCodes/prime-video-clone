
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PrimeWhite from '../prime-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MoviePage(movie) {

    let mov = useParams()
    const [currentMovie, setCurrentMovie] = useState(null)

    async function getMovie() {

        const options = {
            method: 'GET',
            url: `http://www.omdbapi.com/?i=${mov.id}&apikey=baebe8ed`
        }

        try {
            const response = await axios.request(options)
            const movie = response.data
            setCurrentMovie(movie)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovie()
    })
    console.log(currentMovie)
    return (
        <div className="movie__page--main">
            <img loading="eager" src={currentMovie && currentMovie.Poster} alt={currentMovie && currentMovie.Title} className="movie__page--background-img" />
            {
                currentMovie ?
                    <div className="movie__page--info">
                        <div className="movie__page--title">{currentMovie.Title}</div>
                        <div className="movie__page--description">{currentMovie.Plot}</div>
                        <div className="movie__page--stats">
                            {
                                currentMovie.imdbRating !== 'N/A' &&
                                <div className="movie__page--rating"> IMDb {currentMovie.imdbRating}</div>
                            }
                            {
                                currentMovie.Runtime !== 'N/A' && currentMovie.Type === 'movie' &&
                                <div className="movie__page--runtime">{
                                    Math.floor((currentMovie.Runtime).split(' ')[0] / 60)
                                }
                                    {' h '}
                                    {
                                        (currentMovie.Runtime).split(' ')[0] % 60
                                    }
                                    {' min'}
                                </div>
                            }
                            <div className="movie__page--year">{
                                currentMovie.Year &&
                                    currentMovie.Year.slice(-1) === '–'
                                    ?
                                    currentMovie.Year.slice(0, -1) + ' onwards'
                                    :
                                    currentMovie.Year
                            }</div>
                            {
                                currentMovie && currentMovie.Rated !== 'N/A' &&
                                <div className="movie__page--year">{currentMovie.Rated}</div>
                            }
                        </div>
                        <div className="movie__page--genres">
                            {
                                currentMovie.Genre.split(',').map((genre, index) => (
                                    <div key={index} className="movie__page--genre">{genre}</div>
                                ))
                            }
                        </div>
                        <div className="movie__page--buttons">
                            <div className="movie__button--rent button">Rent UHD</div>
                            <div className="movie__button--options button">More purchase options</div>
                            <div className="movie__button--add button__round"><FontAwesomeIcon icon="plus" /></div>
                            <div className="movie__button--add button__round"><FontAwesomeIcon icon="thumbs-up" /></div>
                            <div className="movie__button--add button__round"><FontAwesomeIcon icon="thumbs-down" /></div>
                            <div className="movie__button--add button__round"><FontAwesomeIcon icon="share-nodes" /></div>
                        </div>
                    </div>
                    :
                    <div className="movie__page--info">
                        <div className="movie__page--title skelly">__________________</div>
                        <div className="movie__page--description skelly">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ea eum delectus? Recusandae consequuntur veniam delectus nulla illo vitae a reiciendis, fugiat temporibus quod ad magni neque. Impedit, atque soluta.</div>
                        <div className="movie__page--stats skelly">_______________________</div>
                        <div className="movie__page--genres skelly">___________________</div>
                    </div>
            }
            {
                currentMovie &&
                    currentMovie.Poster !== 'N/A' ?
                    <img loading="eager" src={currentMovie.Poster} alt={currentMovie.Title} />
                    :
                    <img loading="eager" src={PrimeWhite} alt="" className="skelly" />
            }
        </div>
    )
}

export default MoviePage
