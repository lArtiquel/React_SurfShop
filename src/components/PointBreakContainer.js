import React from 'react'
import '../res/surf-theme.min.css'


export default () => {
    return(
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
    );
}