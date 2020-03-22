import React from 'react'
import '../res/surf-theme.min.css'
import '../res/forms.css'


function JoinFormSection() {
    return (
        <div className='contact-bg'>
            <article className='centered container w-container'>
                <div className='bottom middle-line' data-ix='float-in-on-scroll' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}></div>
                <h2 className='sub-heading' data-ix='float-in-on-scroll-2' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>Join the Club</h2>
                <p className='max-500 text-bottom' data-ix='float-in-on-scroll-3' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
                <div className='form-wrapper w-form'>
                    <form className='form w-clearfix' data-ix='float-in-on-scroll-3' data-name='Email Form' id='email-form' name='email-form' style={{'opacity': 0, 'transform': 'translateX(0px) translateY(50px) translateZ(0px)'}}>
                        <div className='form-group w-clearfix'>
                            <label className='form-label' htmlFor='Email-2'>Your Email:</label>
                            <input className='form-control w-input' data-name='Email' id='Email-2' maxLength='256' name='Email' required='required' type='text'/>
                        </div>
                        <input className='submit-button w-button' data-wait='Please wait...' type='submit' value='Submit'/>
                    </form>
                </div>
            </article>
        </div>
    );
}

export default JoinFormSection;