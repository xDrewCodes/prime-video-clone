
import PrimeDisplay from '../prime-home-display.png'

function HomeTest({ homeMovies }) {
    return (
        <>
            <section className="home__main">
                <div className="home__background--display-test">
                    {

                        <img src={PrimeDisplay} alt='movie posters' className="home__movie--img-test" />

                    }
                </div>
            </section>
        </>
    )
}

export default HomeTest;
