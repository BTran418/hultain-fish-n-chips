import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Taste the Best Fish and Chips!"/>
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Where can you find the best fish and chips in Victoria, BC? Look no further. Haultain Fish & Chips is the place to be! We are a local business since 1942! Come in and have your the best and reshest fish fried or grilled? Take your choice and don't forget the fries!</p>
      <button type="button" className='custom__button'><a href='#menu'>Explore Menu</a></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={ images.welcome } alt="header img" />
    </div>
  </div>
);

export default Header;
