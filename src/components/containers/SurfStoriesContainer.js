import React from 'react';
import '../../res/styles/surf-theme.min.css'
import VimeoVideo from '../VimeoVideo'


export default () => {
    return (
        <article className='both-top-and-bottom container w-container'>
            <div className='w-row' id='stories'>
                <div className='column-2 w-col w-col-6 w-col-small-6 w-col-tiny-6'>
                    <img alt='Surfer on the Rocks' data-ix='float-in-on-scroll' src={process.env.PUBLIC_URL + '/img/surfer-rocks.jpg'}/>
                    <div className='padded-text-container' data-ix='float-in-on-scroll-3'>
                        <p className='padded-text'>Once I surfed the waves, then we switched... And it wasn't cool! So, don't be a wack and don't give wave surf on you!, - Archibald Surfovich aka "The Profi"</p>
                        <a className='text-link' href='#'>Read More</a>
                    </div>
                </div>
                <div className='column w-col w-col-6 w-col-small-6 w-col-tiny-6'>
                    <a className='image w-inline-block w-lightbox' data-ix='hover-play-icon' id='vimeoSurfVideo'>
                        <VimeoVideo videoURL = 'https://vimeo.com/243678113'
                                    responsive/>
                    </a>
                </div>
            </div>
        </article>
    );
}