
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PrimeWhite from '../prime-white.svg'

function MoviePage(movie) {

    let mov = useParams()
    const [currentMovie, setCurrentMovie] = useState(null)

    async function getMovie() {

        const options = {
            method: 'GET',
            url: 'https://imdb.iamidiotareyoutoo.com/search',
            params: { q: mov.movie }
        }

        try {
            const responses = await axios.request(options)
            const movies = responses.data.description
            setCurrentMovie(movies[0])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div className="movie__page--main">
            <img loading="eager" src={currentMovie && currentMovie['#IMG_POSTER']} alt={currentMovie && currentMovie['#TITLE']} className="movie__page--background-img" />
            {
                currentMovie ?
                <div className="movie__page--info">
                <div className="movie__page--title">{currentMovie['#TITLE']}</div>
                <div className="movie__page--description">{
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, enim repudiandae. Vitae dolores nam ratione officiis. Vitae ea quasi tempora in aliquid dicta quidem et quis saepe ullam? Doloribus, doloremque!'
                    }</div>
                <div className="movie__page--year">{currentMovie['#YEAR']}</div>
            </div>
            :
            <div className="movie__page--info">
                <div className="movie__page--title skelly">{mov.movie}</div>
                <div className="movie__page--description skelly">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ea eum delectus? Recusandae consequuntur veniam delectus nulla illo vitae a reiciendis, fugiat temporibus quod ad magni neque. Impedit, atque soluta.</div>
                <div className="movie__page--year skelly">2025</div>
            </div>
            }
            {
                currentMovie ?
                <img loading="eager" src={currentMovie['#IMG_POSTER']} alt={currentMovie['#TITLE']} />
                :
                <img loading="eager" src={PrimeWhite} alt="" className="skelly" />
            }
        </div>
    )
}

export default MoviePage
