import axios from 'axios';
import React, { useEffect } from 'react';
import MovieList from '../components/MovieList';

function Home({ homeMovies }) {
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const gradientElement = document.querySelector('.home__background--display');
            if (gradientElement) {
                gradientElement.style.transform = `rotate(-12deg) translateX(-${scrollPosition / 2.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (homeMovies.length >= 12) {
            const imdbId = homeMovies[11]['#IMDB_ID'];
            const options = { method: 'GET', url: `https://imdb.iamidiotareyoutoo.com/search?tt=${imdbId}` };

            axios.request(options)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [homeMovies]);

    return (
        <>
        <section className="home__main">
            <div className="home__background--display">
                {
                    homeMovies.map((movie, index) => {
                        return (
                            <img src={movie['#IMG_POSTER']} alt='movie poster' key={index} className="home__movie--img" />
                        )
                    })
                }
            </div>
            <div className="home__background--gradient"></div>
        </section>
        <section className="home__browse">
                <MovieList title="Popular movies" query="inception" />
        </section>
        </>
    )
}

export default Home;
