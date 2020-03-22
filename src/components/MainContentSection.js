import React from 'react'
import '../res/surf-theme.min.css'


function MainContentSection() {
    return (
        <section className='section'>

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

            <main className='container w-container'>
                <div className='hero-section w-clearfix'>
                    <img alt='Surfer' className='surfer' data-ix='fade-in-on-load' sizes='(max-width: 479px) 81vw, (max-width: 767px) 78vw, (max-width: 991px) 80vw, 73vw' src={window.location.origin + '/img/surfer.jpg'} srcSet='https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f2780890a1b8136563f50c_surfer-p-500.jpeg 500w, https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f2780890a1b8136563f50c_surfer.jpg 1056w' style={{'opacity': 1, 'transition': 'opacity 1500ms linear 0s'}}/>
                        <div className='hold-slide-content'>
                            <div className='text-block' data-ix='float-in-on-load' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>Your</div>
                            <h1 className='heading' data-ix='float-in-on-load-2' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>Beautiful Escape</h1>
                            <p className='paragraph' data-ix='float-in-on-load-3' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.</p>
                        </div>
                </div>
            </main>

            <article className='container quote w-container'>
                <p className='quote-text' data-ix='float-in-on-scroll' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>
                    Surfing is cool!<br/>Probably...<br/>I'm not quite sure...<br/>Yeah...<br/>This design look kinda thicc. Whaddya think?
                </p>
                <div className='text-block-2' data-ix='float-in-on-scroll-2' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}>
                    Artsiom McPickle
                </div>
                <div className='middle-line' data-ix='float-in-on-scroll-3' style={{'opacity': 1, 'transform': 'translateX(0px) translateY(0px) translateZ(0px)', 'transition': 'opacity 1500ms ease 0s, transform 1500ms ease 0s'}}></div>
            </article>

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

            <article className='both-top-and-bottom container w-container'>
                <div className='flex-row w-row'>
                    <div className='column-3 w-col w-col-5'>
                        <div className='heading-block' data-ix='float-in-on-scroll' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>
                            <div className='number'>01</div>
                            <h2 className='sub-heading'>Surfboards</h2>
                            <div className='small-hr'></div>
                        </div>
                        <p className='text-bottom' data-ix='float-in-on-scroll-2' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
                        <a className='text-link top' data-ix='float-in-on-scroll-3' href='#' style={{'transition': 'color 0.25s ease 0s', 'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>Read More</a>
                    </div>
                    <div className='column-4 w-col w-col-7'>
                        <img alt='Surfboards' className='image-3' data-ix='float-in-on-scroll' sizes='(max-width: 479px) 96vw, (max-width: 767px) 92vw, (max-width: 991px) 55vw, 50vw' 
                            src={window.location.origin + '/img/surf-splash.jpg'} 
                            srcSet='https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f27ac2a5352543aeedc61b_surf-splash-p-500.jpeg 500w, https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f27ac2a5352543aeedc61b_surf-splash.jpg 762w' style={{'opacity': 0, 'transform': 'translateX(0) translateY(50) translateZ(0)'}} />
                    </div>
                </div>
            </article>

            <article className='both-top-and-bottom container w-container'>
                <div className='flex-row reverse w-row'>
                    <div className='column-7 w-col w-col-7'>
                        <img alt='Point Break' className='small-image' data-ix='float-in-on-scroll' src={window.location.origin + '/img/surf-camp.jpg'} width='244.5' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}/>
                    </div>
                    <div className='column-3 w-col w-col-5'>
                        <div className='heading-block' data-ix='float-in-on-scroll' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>
                            <div className='number'>02</div>
                            <h2 className='sub-heading'>Point Break</h2>
                            <div className='small-hr'></div>
                        </div>
                        <p className='text-bottom' data-ix='float-in-on-scroll-2' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
                        <a className='text-link top' data-ix='float-in-on-scroll-3' href='#' style={{'transition': 'color 0.25s ease 0s', 'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>Read More</a>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default MainContentSection;