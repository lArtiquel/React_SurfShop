import React from 'react';
import '../res/surf-theme.min.css'


export default () => {
    return (
        <article className='both-top-and-bottom container w-container'>
            <div className='w-row' id='stories'>
                <div className='column-2 w-col w-col-6 w-col-small-6 w-col-tiny-6'>
                    <img alt='Surfer on the Rocks' data-ix='float-in-on-scroll' src={window.location.origin + '/img/surfer-rocks.jpg'} style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}/>
                        <div className='padded-text-container' data-ix='float-in-on-scroll-3' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>
                            <p className='padded-text'>By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
                            <a className='text-link' href='#'>Read More</a>
                        </div>
                </div>
                <div className='column w-col w-col-6 w-col-small-6 w-col-tiny-6'>
                    <a className='image w-inline-block w-lightbox' data-ix='hover-play-icon' href='#' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>
                        <img alt='Surfer Video Thumbnail' src={window.location.origin + '/img/surfer-2.jpg'}/>
                        <div className='play-button'>
                            <div className='play-icon'></div>
                        </div>
                    </a>
                </div>
            </div>
        </article>
    );
}