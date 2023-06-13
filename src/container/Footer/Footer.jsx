import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>

    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext' style={{color: '#FFF'}}>Contact Us</h1>
        <a href="https://goo.gl/maps/gVq9Vd3pNbAzWz2N7" target='_blank' style={{color: '#FFF'}} rel="noreferrer"><p className='p__opensans'>1127 Haultain Street, Victoria BC</p></a>
        <p className='p__opensans'>+1 250-383-8332</p>
        <a href="mailto:haultainfishchips@hotmail.com" style={{color: '#FFF'}}><p className='p__opensans email'>haultainfishchips@hotmail.com</p></a>
      </div>
      <div className='app__footer-links_logo'>
        <img src={ images.gericht } alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={ images.spoon } alt="spoon" />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext' style={{color: '#FFF'}}>Working Hours</h1>
        <p className='p__opensans'>Monday: Closed</p>
        <p className='p__opensans'>Tue - Sat: 11:30 AM - 7:30 PM</p>
        <p className='p__opensans'>Sunday: 4:00 PM - 7:30 PM</p>
        <p className='p__opensans'>+1 250-383-8332</p>
      </div>
    </div>
    <div className='footer_copyright'>
      <p className='p__opensans'>2023 Haultain Fish & Chips. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
