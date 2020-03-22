import React from 'react'
import '../res/surf-theme.min.css'


export default () => {
    return (
        <div className='side-bar'>
            <p className='side-bar__text'>Coolest Surfing Magazine</p>
            <div className='social-block'>
                <a className='social-icon w-inline-block' href='#'>
                    <img className='tumble' src={window.location.origin + '/img/tumblr.svg'} width='41'/>
                </a>
                <a className='social-icon w-inline-block' href='#'>
                    <img src={window.location.origin + '/img/twitter.svg'} width='41'/>
                </a>
                <a className='social-icon w-inline-block' href='#'>
                    <img src={window.location.origin + '/img/vimeo.svg'} width='41'/>
                </a>
            </div>
        </div>
    );
} 