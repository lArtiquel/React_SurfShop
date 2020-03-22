import React from 'react'
import '../../res/styles/surf-theme.min.css'


export default () => {
    return(
        <article className='container quote w-container'>
            <p className='quote-text' data-ix='float-in-on-scroll'>
                Surfing is cool!<br/>Probably...<br/>Not quite sure...<br/>Yeah...<br/>This design look kinda thicc. Whaddya think?
            </p>
            <div className='text-block-2' data-ix='float-in-on-scroll-2'>
                Artie McPickle
            </div>
            <div className='middle-line' data-ix='float-in-on-scroll-3'></div>
        </article>
    );
} 