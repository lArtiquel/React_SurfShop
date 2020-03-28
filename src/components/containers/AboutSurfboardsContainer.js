import React from 'react'
import '../../res/styles/surf-theme.min.css'


export default () => {
    return (
        <article className='both-top-and-bottom container w-container'>
            <div className='flex-row w-row'>
                <div className='column-3 w-col w-col-5'>
                    <div className='heading-block' data-ix='float-in-on-scroll'>
                        <div className='number'>01</div>
                        <h2 className='sub-heading'>Surfboards</h2>
                        <div className='small-hr'></div>
                    </div>
                    <p className='text-bottom' data-ix='float-in-on-scroll-2'>
                        They were invented in ancient Hawaii usually made of wood from local trees, such as koa, and were often over 460 cm in length and extremely heavy.
                        Modern surfboards are made of polyurethane or polystyrene foam covered with layers of fiberglass cloth, and polyester or epoxy resin. The result is a light and strong surfboard that is buoyant and maneuverable.
                    </p>
                    <a className='text-link top' data-ix='float-in-on-scroll-3' href='#'>Read More</a>
                </div>
                <div className='column-4 w-col w-col-7'>
                    <img alt='Surfboards' className='image-3' data-ix='float-in-on-scroll' sizes='(max-width: 479px) 96vw, (max-width: 767px) 92vw, (max-width: 991px) 55vw, 50vw' 
                        src={process.env.PUBLIC_URL + '/img/surf-splash.jpg'} 
                        srcSet='https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f27ac2a5352543aeedc61b_surf-splash-p-500.jpeg 500w, https://daks2k3a4ib2z.cloudfront.net/58f24ff59590171867ff6fe6/58f27ac2a5352543aeedc61b_surf-splash.jpg 762w'/>
                </div>
            </div>
        </article>
    );
}
