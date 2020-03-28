import React from 'react'
import '../../res/styles/surf-theme.min.css'

function ContactSection() {
    return (
        <div className='footer section' id='camp'>
            <address className='both-top-and-bottom container w-container'>
                <div className='row w-row'>
                    <div className='column-5 w-clearfix w-col w-col-6'>
                        <img alt='Surf Camp' className='image-4' src={process.env.PUBLIC_URL + '/img/surf-beach.jpg'}/>
                    </div>
                    <div className='column-6 w-col w-col-6'>
                        <div className='footer-sub-head'>Our Camp</div>
                        <h3 className='heading-2'>
                            CA 91932, USA<br/>Imperial Beach<br/>560 Silver Strand Blvd
                        </h3>
                        <a className='text-link top' data-ix='float-in-on-scroll-3' href='#'>Get in Touch</a>
                    </div>
                </div>
            </address>
        </div>
    );
}

export default ContactSection;