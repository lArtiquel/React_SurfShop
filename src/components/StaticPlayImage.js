import React from 'react'
import '../res/styles/surf-theme.min.css'


export default ({imgSource}) => {
    return (
        <>
            <img alt='Surfer Video Thumbnail' src={imgSource}/>
            <div className='play-button'>
                <div className='play-icon'></div>
            </div> 
        </>
    );
}