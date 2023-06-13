import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__menu flex__center section__padding' id='menu'>
    <div className='app__menu-title'>
      <SubHeading title='Locally Own, Loally Sourced'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__menu-menu'>
      <div className='app__menu-menu__food flex-center'>
        <p className='app__menu-menu__heading'>Featured Dishes</p>
        <div className='app__menu-menu__items'>
          { data.wines.map((wine, index) => (
            <MenuItem key={ wine.title + index } title={ wine.title } price={ wine.price } tags={ wine.tags }/>
          ))}
        </div>
      </div>

      <div className='app__menu-menu__img'>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='app__menu-menu__drinks'>
        <p className='app__menu-menu__heading'>Featured Drinks</p>
        <div className='app__menu-menu__items'>
          { data.cocktails.map((cocktail, index) => (
            <MenuItem key={ cocktail.title + index } title={ cocktail.title } price={ cocktail.price } tags={ cocktail.tags }/>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
