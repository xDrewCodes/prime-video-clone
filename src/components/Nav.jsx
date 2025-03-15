
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    function switchPage(targ) {

        let navs = document.getElementsByClassName('nav__link')

        Array.from(navs).forEach(nav => {
            if (nav.classList.contains('nav__link--selected')) {
                nav.classList.remove('nav__link--selected')
            }
        })

        targ.classList.add('nav__link--selected')

    }

    return (
        <nav className="row">
            <div className="nav__links--side">
                <Link to="/"><div className="nav__logo">prime video</div></Link>
                <Link to="/"><div className="nav__link nav__link--selected" onClick={(e) => {switchPage(e.target)}}>Home</div></Link>
                <Link to="/movies"><div className="nav__link" onClick={(e) => {switchPage(e.target)}}>Movies</div></Link>
                <Link to="/shows"><div className="nav__link" onClick={(e) => {switchPage(e.target)}}>TV shows</div></Link>
                <Link to="/sports"><div className="nav__link" onClick={(e) => {switchPage(e.target)}}>Sports</div></Link>
                <Link to="/tv"><div className="nav__link" onClick={(e) => {switchPage(e.target)}}>Live TV</div></Link>
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
