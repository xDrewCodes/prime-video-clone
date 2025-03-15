
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <div className="nav__links--side">
                <div className="nav__logo">prime video</div>
                <Link to="/"><div className="nav__link">Home</div></Link>
                <Link to="/movies"><div className="nav__link">Movies</div></Link>
                <Link to="/"><div className="nav__link">TV shows</div></Link>
                <Link to="/"><div className="nav__link">Sports</div></Link>
                <Link to="/"><div className="nav__link">Live TV</div></Link>
            </div>
            <div className="nav__profile--side">
                <div className="nav__select">.........</div>
                <div className="nav__profile"></div>
                <div className="nav__join-prime">Join Prime</div>
            </div>
        </nav>
    )   
}

export default Nav
