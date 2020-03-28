import React from 'react'
import '../../res/styles/surf-theme.min.css'
import PictureRef from '../PictureRef.js'

export default () => {
    return (
        <div className='side-bar'>
            <p className='side-bar__text'>Coolest Surfing Magazine</p>
            <div className='social-block'>
                <PictureRef refClassName = 'social-icon w-inline-block' imgClassName = 'tumble' 
                            imgSrc={process.env.PUBLIC_URL + '/img/tumblr.svg'} imgWidth='41'/>
                
                <PictureRef refClassName = 'social-icon w-inline-block' imgClassName = 'tumble' 
                            imgSrc={process.env.PUBLIC_URL + '/img/twitter.svg'} imgWidth='41'/>
                
                <PictureRef refClassName = 'social-icon w-inline-block' imgClassName = 'tumble' 
                            imgSrc={process.env.PUBLIC_URL + '/img/vimeo.svg'} imgWidth='41'/>
            </div>
        </div>
    );
} 