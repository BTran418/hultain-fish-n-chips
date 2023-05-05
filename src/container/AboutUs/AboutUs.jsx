import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={ images.G} alt="letter G" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={ images.spoon } alt="history_spoon" className='history__spoon'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptate laborum aliquam dolorum blanditiis explicabo, rem repellendus at dolorem quos sit itaque quis, aperiam id maxime unde inventore, error nesciunt.</p>
        <button type='button' className='custom__button'>Learn More</button>
      </div>
      <div>
        <img src={ images.knife } alt="history_knife" className='app__aboutus-content_knife'/>
      </div>
      <div className='app__aboutus-content_contact'>
        <h1 className='headtext__cormorant'>Contact</h1>
        <img src={ images.spoon } alt="history_spoon" className='history__spoon'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptate laborum aliquam dolorum blanditiis explicabo, rem repellendus at dolorem quos sit itaque quis, aperiam id maxime unde inventore, error nesciunt.</p>
        <button type='button' className='custom__button'>Contact Us</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
