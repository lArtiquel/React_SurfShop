import React from 'react'
import '../../res/styles/surf-theme.min.css'

function Footer() {
  return (
    <footer className='section'>
      <footer className='both-top-and-bottom centered container w-container'>
        <a className='footer-logo w-inline-block' data-ix='float-in-on-scroll' href='#'>
          <img alt='Surfboard Logo' className='image-5' src={window.location.origin + '/img/surfboard-logo.svg'} width='50'/>
        </a>
        <div className='text-links' data-ix='float-in-on-scroll-2'>
          <a className='link' href='#stories'>Stories</a>
          <a className='link' href='#'>Events</a>
          <a className='link' href='#'>Places</a>
          <a className='link' href='#surfboards'>Boards</a>
        </div>
        <div className='social-links-footer' data-ix='float-in-on-scroll-3'>
          <a className='footer social-icon w-inline-block' href='#'>
            <img className='tumble' src={window.location.origin + '/img/tumblr.svg'}/>
          </a>
          <a className='footer social-icon w-inline-block' href='#'>
            <img className='tumble' src={window.location.origin + '/img/twitter.svg'}/>
          </a>
          <a className='footer social-icon w-inline-block' href='#'>
            <img className='tumble' src={window.location.origin + '/img/vimeo.svg'}/>
          </a>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
