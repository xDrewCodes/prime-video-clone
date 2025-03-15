
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="row">
            <div className="nav__links--side">
                <Link to="/"><div className="nav__logo">prime video</div></Link>
                <Link to="/"><div className="nav__link nav__link--selected">Home</div></Link>
                <Link to="/movies"><div className="nav__link">Movies</div></Link>
                <Link to="/shows"><div className="nav__link">TV shows</div></Link>
                <Link to="/sports"><div className="nav__link">Sports</div></Link>
                <Link to="/tv"><div className="nav__link">Live TV</div></Link>
            </div>
            <div className="nav__profile--side">
                <div className="nav__select"><FontAwesomeIcon icon="grip"/></div>
                <div className="nav__profile"></div>
                <div className="nav__join-prime">Join Prime</div>
            </div>
        </nav>
    )   
}

export default Nav
