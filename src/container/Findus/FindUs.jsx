import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info '>
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content hours'>
      <p className='p__cormorant' style={{color: '#DCCA87', margin: 'rem 0'}}>Open Hours</p>
      <p className='p__opensans'>Monday: Closed</p>
      <p className='p__opensans'>Tues - Sat: 11:30 AM - 7:30 PM</p>
      <p className='p__opensans'>Sunday: 4:00 PM - 7:30 PM</p>
      </div>
      <div className='app__wrapper-content address' style={{paddingTop: '20px'}}>
      <p className='p__cormorant' style={{color: '#DCCA87', margin: 'rem 0'}}>Address</p>
      <a href="https://goo.gl/maps/gVq9Vd3pNbAzWz2N7" target='_blank' style={{color: '#FFF'}} rel="noreferrer"><p className='p__opensans'>1127 Haultain Street, Victoria BC</p></a>
      </div>
      <div className='app__wrapper-content address' style={{paddingTop: '20px'}}>
      <p className='p__cormorant' style={{color: '#DCCA87', margin: 'rem 0'}}>Email</p>
      <a href="mailto:haultainfishchips@hotmail.com" style={{color: '#FFF'}} rel="noreferrer"><p className='p__opensans email'>haultainfishchips@hotmail.com</p></a>
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={ images.findus } alt="findus" />
    </div>
  </div>
);

export default FindUs;
