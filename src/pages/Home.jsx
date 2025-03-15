
import React from 'react'

function Home({ homeMovies }) {
    return (
        <section className="home__main">
            <div className="home__background--display">
                {
                    homeMovies.map((movie, index) => {
                        return (
                            <img src={movie['#IMG_POSTER']} key={index} className="home__movie--img" />
                        )
                    })
                }
            </div>
            <div className="home__background--gradient"></div>
        </section>
    )
}

export default Home
