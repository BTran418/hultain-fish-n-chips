import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext' style={{color: '#FFF'}}>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
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
        <p className='p__opensans'>Mon -  Fri: 8:00 AM - 5:00 PM</p>
        <p className='p__opensans'>Sat - Sun: 8:00 AM - 5:00 PM</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
    </div>
    <div className='footer_copyright'>
      <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
