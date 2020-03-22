import React from 'react'
import '../res/surf-theme.min.css'


export default () => {
    return(
        <article className='container quote w-container'>
            <p className='quote-text' data-ix='float-in-on-scroll' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>
                Surfing is cool!<br/>Probably...<br/>Not quite sure...<br/>Yeah...<br/>This design look kinda thicc. Whaddya think?
            </p>
            <div className='text-block-2' data-ix='float-in-on-scroll-2' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>
                Artie McPickle
            </div>
            <div className='middle-line' data-ix='float-in-on-scroll-3' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}></div>
        </article>
    );
} 