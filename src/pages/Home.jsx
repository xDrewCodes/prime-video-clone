
import MovieList from '../components/MovieList';
import PrimeWhite from '../prime-white.svg'
import PrimeDisplay from '../prime-home-display.png'
import { Link } from 'react-router-dom';

function Home({ homeMovies }) {
    return (
        <>
            <section className="home__main">
                <div className="home__background--display">
                    {
                        <img src={PrimeDisplay} alt='movie posters' className="home__movie--img" />
                    }
                </div>
                <div className="home__background--gradient"></div>
                <img src={PrimeWhite} className="home__logo" alt="white prime video logo" />
                <Link to="/movies"><div className="home__search--movies">Search movies</div></Link>
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
