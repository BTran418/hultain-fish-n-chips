import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__menu flex__center section__padding' id='menu'>
    <div className='app__menu-title'>
      <SubHeading title='Locally Own, Loally Sourced'/>
      <h1 className='headtext__cormorant'>Haultain Fish & Chips</h1>
    </div>

    <div className='app__menu-menu'>
      <div className='app__menu-menu__food flex__center'>
        <p className='app__menu-menu__heading'>Seafood & Fish</p>
        <div className='app__menu-menu__items'>
          { data.diner.map((diner, index) => (
            <MenuItem key={ diner.title + index } title={ diner.title } price={ diner.price } tags={ diner.tags }/>
          ))}
        </div>
        <div className='app__wrapper_img seafood'>
          <img src={ images.SeafoodPlatter } alt="seafood" />
        </div>
      </div>
      
      <div className='app__menu-menu__drinks flex__center'>
      <p className='app__menu-menu__heading'>Burgers & More</p>
        <div className='app__menu-menu__items'>
          { data.burger.map((burger, index) => (
            <MenuItem key={ burger.title + index } title={ burger.title } price={ burger.price } tags={ burger.tags }/>
          ))}
        </div>
        <div className='app__menu-menu__drinks flex__center'>
        <p className='app__menu-menu__heading'>Sides</p>
        <div className='app__menu-menu__items sides'>
          { data.takeout.map((takeout, index) => (
            <MenuItem key={ takeout.title + index } title={ takeout.title } price={ takeout.price } tags={ takeout.tags }/>
          ))}
        </div>
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
