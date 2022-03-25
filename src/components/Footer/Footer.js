import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the PK or Poor Ranking
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/'><h2>Home</h2></Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/about'><h2>About</h2></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/participants'><h2>Participants</h2></Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/rank'><h2>Rank</h2></Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PKRANK
              <i class="fas fa-paw"></i>
            </Link>
          </div>
          <small class='website-rights'>PKRANK © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;