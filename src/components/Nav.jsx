import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
    const location = useLocation()

    return (
        <nav className="row">
            <div className="nav__links--side">
                <Link to="/">
                    <div className="nav__logo">prime video</div>
                </Link>
                <Link to="/">
                    <div className={`nav__link ${location.pathname === '/' ? 'nav__link--selected' : ''}`}>
                        Home
                    </div>
                </Link>
                <Link to="/movies">
                    <div className={`nav__link ${location.pathname === '/movies' ? 'nav__link--selected' : ''}`}>
                        Movies
                    </div>
                </Link>
                <div className="nav__link" style={{ cursor: 'not-allowed' }}>TV shows</div>
                <div className="nav__link" style={{ cursor: 'not-allowed' }}>Sports</div>
                <div className="nav__link" style={{ cursor: 'not-allowed' }}>Live TV</div>
            </div>
            <div className="nav__profile--side">
                <div className="nav__select"><FontAwesomeIcon icon="grip" /></div>
                <div className="nav__profile"></div>
                <div className="nav__join-prime">Join Prime</div>
            </div>
        </nav>
    )
}

export default Nav
