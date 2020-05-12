import React from 'react';
import '../../res/styles/surf-theme.min.css';
import PictureRef from '../PictureRef.js';

function Footer() {
  return (
    <footer className="section">
      <footer className="both-top-and-bottom centered container w-container">
        <a
          className="footer-logo w-inline-block"
          data-ix="float-in-on-scroll"
          href="#">
          <img
            alt="Surfboard Logo"
            className="image-5"
            src={process.env.PUBLIC_URL + '/img/surfboard-logo.svg'}
            width="50"
          />
        </a>
        <div className="text-links' data-ix='float-in-on-scroll-2">
          <a className="link" href="#stories">
            Stories
          </a>
          <a className="link" href="#shop">
            Shop
          </a>
          <a className="link" href="#events">
            Events
          </a>
          <a className="link" href="#camp">
            Our Camp
          </a>
        </div>
        <div className="social-links-footer" data-ix="float-in-on-scroll-3">
          <PictureRef
            refClassName="footer social-icon w-inline-block"
            imgClassName="tumble"
            imgSrc={process.env.PUBLIC_URL + '/img/tumblr.svg'}
          />
          <PictureRef
            refClassName="footer social-icon w-inline-block"
            imgClassName="tumble"
            imgSrc={process.env.PUBLIC_URL + '/img/twitter.svg'}
          />
          <PictureRef
            refClassName="footer social-icon w-inline-block"
            imgClassName="tumble"
            imgSrc={process.env.PUBLIC_URL + '/img/vimeo.svg'}
          />
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
