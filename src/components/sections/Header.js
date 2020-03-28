import React from 'react'
import '../../res/styles/surf-theme.min.css'

function Header() {
    return ( 
        <header className='header'>
            <div className='navbar w-nav' data-animation='default' data-collapse='medium' data-duration={400} id='top'>
                <header className='container in-nav w-container'>
                    <a className='w-nav-brand' href='#top'>
                        <img alt='Surfboard Logo' className='surfboard-logo' src={process.env.PUBLIC_URL + '/img/surfboard-logo.svg'} width={50}/>
                    </a>
                    <nav className='nav-menu w-clearfix w-nav-menu' role='navigation'>
                        <a className='nav-link w-nav-link' href='#stories'>Stories</a>
                        <a className='nav-link w-nav-link' href='#shop'>Shop</a>
                        <a className='nav-link w-nav-link' href='#events'>Events</a>
                        <a className='nav-link w-nav-link' href='#camp'>Our Camp</a>
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