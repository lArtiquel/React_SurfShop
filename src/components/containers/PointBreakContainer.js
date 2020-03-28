import React from 'react'
import '../../res/styles/surf-theme.min.css'


export default () => {
    return(
        <article className='both-top-and-bottom container w-container' id='events'>
            <div className='flex-row reverse w-row'>
                <div className='column-7 w-col w-col-7'>
                    <img alt='Events' className='small-image' data-ix='float-in-on-scroll' src={process.env.PUBLIC_URL + '/img/surf-camp.jpg'} width='244.5'/>
                </div>
                <div className='column-3 w-col w-col-5'>
                    <div className='heading-block' data-ix='float-in-on-scroll'>
                        <div className='number'>02</div>
                        <h2 className='sub-heading'>Events</h2>
                        <div className='small-hr'></div>
                    </div>
                    <p className='text-bottom' data-ix='float-in-on-scroll-2' >By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
                    <a className='text-link top' data-ix='float-in-on-scroll-3' href='#'>Read More</a>
                </div>
            </div>
        </article>
    );
}