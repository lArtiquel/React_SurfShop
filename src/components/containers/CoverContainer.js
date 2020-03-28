import React from 'react'
import '../../res/styles/surf-theme.min.css'


export default () => {
    return (
       <main className='container w-container'>
            <div className='hero-section w-clearfix'>
                <img alt='Surfer' className='surfer' data-ix='fade-in-on-load' sizes='(max-width: 479px) 81vw, (max-width: 767px) 78vw, (max-width: 991px) 80vw, 73vw' src={process.env.PUBLIC_URL + '/img/surfer.jpg'} srcSet='https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f2780890a1b8136563f50c_surfer-p-500.jpeg 500w, https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f2780890a1b8136563f50c_surfer.jpg 1056w'/>
                    <div className='hold-slide-content'>
                        <div className='text-block' data-ix='float-in-on-load'>Your</div>
                        <h1 className='heading' data-ix='float-in-on-load-2'>Beautiful Escape</h1>
                        <p className='paragraph' data-ix='float-in-on-load-3'>One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.</p>
                    </div>
            </div>
        </main> 
    );
}
