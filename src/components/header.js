import React from 'react'
import '../res/surf-theme.min.css'

function Header() {
    return ( 
    <header className='header'>
        <div className='navbar w-nav' data-animation='default' data-collapse='medium' data-duration={400} id='top'>
            <header className='container in-nav w-container'>
                <a className='w-nav-brand' href='#top'>
                    <img alt='Surfboard Logo' className='surfboard-logo' src={window.location.origin + '/img/surfboard-logo.svg'} width={50}/>
                </a>
                <nav className='nav-menu w-clearfix w-nav-menu' role='navigation'>
                    <a className='nav-link w-nav-link' href='#stories' style={{maxWidth: 1200}}>Stories</a>
                    <a className='nav-link w-nav-link' href='#' style={{maxWidth: 1200}}>Events</a>
                    <a className='nav-link w-nav-link' href='#' style={{maxWidth: 1200}}>Places</a>
                    <a className='nav-link w-nav-link' href='#surfboards' style={{maxWidth: 1200}}>Boards</a>
                </nav>
                <div className='menu-button w-nav-button'>
                    <div className='w-icon-nav-menu'></div>
                </div>
            </header>
            <div className='w-nav-overlay' data-wf-ignore=''></div>
        </div>
    </header>
    );
}

export default Header;