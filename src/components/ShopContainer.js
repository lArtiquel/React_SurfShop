import React from 'react'
import '../res/surf-theme.min.css'


export default () => {
    return (
        <article className='bg container w-container' id='surfboards'>
            <div className='heading-box'>
                <div className='small-blue-heading'>SHOP</div>
                <h2 className='sub-heading'>Surfboards</h2>
            </div>
            <div className='slider w-slider' data-animation='slide' data-duration='500' data-infinite='1'>
                <div className='mask w-slider-mask'>
                    <div className='slide w-slide' data-ix='float-in-on-scroll' style={{'transform': 'translateX(0px) translateY(50px) translateZ(0px)', 'opacity': 0}}>
                        <img alt='Chilli Board' className='image-2' data-ix='floating'
                                src={window.location.origin + '/img/chili-board.png'}
                                style={{'transition': 'transform 2000ms linear 0s', 'transform': 'translateX(0px) translateY(10px)'}}/>
                        <div className='surf-board-back-drop'></div>
                        <div className='surfboard-description'>
                            <div>Funboards</div>
                            <h3 className='surfboard-heading'>Chilli Rare Bird</h3>
                            <div className='surfboard__price'>
                                <div>$890</div>
                                <a className='surfboard__buy-link' href='#'>BUY</a>
                            </div>
                        </div>
                    </div>
                    <div className='slide w-slide' data-ix='float-in-on-scroll-2' style={{'transform': 'translateX(0px) translateY(50px) translateZ(0px)', 'opacity': 0}}>
                        <img alt='Emery Board' className='image-2' data-ix='floating-2' 
                            src={window.location.origin + '/img/board-2.png'} 
                            style={{'transition': 'transform 2000ms ease 0s', 'transform': 'translateX(0px) translateY(-10px)'}}/>
                        <div className='surf-board-back-drop'></div>
                        <div className='surfboard-description'>
                            <div>Funboards</div>
                            <h3 className='surfboard-heading'>Emery NEM XF</h3>
                            <div className='surfboard__price'>
                                <div>$900</div>
                                <a className='surfboard__buy-link' href='#'>BUY</a>
                            </div>
                        </div>
                    </div>
                    <div className='slide w-slide' data-ix='float-in-on-scroll-3' style={{'transform': 'translateX(0px) translateY(50px) translateZ(0px)', 'opacity': 0}}>
                        <img alt='Agency Grom Board' className='image-2' data-ix='floating' 
                            src={window.location.origin + '/img/surfboard-grom.png'} 
                            style={{'transition': 'transform 2000ms linear 0s', 'transform': 'translateX(0px) translateY(10px)'}}/>
                        <div className='surfboard-description'>
                            <div>Funboards</div>
                            <h3 className='surfboard-heading'>Agency GROM</h3>
                            <div className='surfboard__price'>
                                <div>$750</div>
                                <a className='surfboard__buy-link' href='#'>BUY</a>
                            </div>
                        </div>
                        <div className='surf-board-back-drop'></div>
                    </div>
                </div>
                <div className='arrow w-slider-arrow-left'>
                    <div className='w-icon-slider-left'></div>
                </div>
                <div className='arrow w-slider-arrow-right'>
                    <div className='w-icon-slider-right'></div>
                </div>
                <div className='w-round w-slider-nav'>
                    <div className='w-slider-dot w-active' data-wf-ignore=''></div>
                </div>
            </div>
        </article>
    );
}
