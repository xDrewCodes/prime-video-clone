
import React, { useEffect } from 'react';
import MovieList from '../components/MovieList';
import PrimeWhite from '../prime-white.svg'

function Home({ homeMovies }) {
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const gradientElement = document.querySelector('.home__background--display');
            if (gradientElement) {
                gradientElement.style.transform = `rotate(-12deg) translateX(-${scrollPosition / 2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <img src={PrimeWhite} className="home__logo" alt="white prime video logo" />
            <div className="home__more--details">More details</div>
        </section>
        <section className="home__browse">
                <MovieList title="Popular movies" list={homeMovies.slice(30, 45)} />
                <MovieList title="Recently added" list={homeMovies.slice(0, 15)} />
                <MovieList title="Amazon originals" list={homeMovies.slice(20, 35)} />
        </section>
        </>
    )
}

export default Home;
