import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={ images.H} alt="letter H" style={{opacity:'0.1'}} className='letter-H'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={ images.spoon } alt="history_spoon" className='history__spoon'/>
        <p className='p__opensans'>Haultain Fish & Chips has been in business since 1924, and we make sure that all tourists and Victoria residents alike enjoy every bite! The restaurant serves a menu ranging from their signature halibut to cod, prawns, oysters, scallops, calamari. </p>
      </div>
      <div>
        <img src={ images.knife } alt="history_knife" className='app__aboutus-content_knife'/>
      </div>
      <div className='app__aboutus-content_contact'>
        <div style={{padding: '1rem 0 1rem 0'}}><iframe src="https://webapps.9c9media.com/vidi-player/1.9.24/share/iframe.html?currentId=1209455&config=ctvnews/share.json&kruxId=&rsid=&siteName=vancouver island&cid=%5B%7B%22contentId%22%3A1209455%2C%22ad%22%3A%7B%22adsite%22%3A%22ctv.ctvnews%22%2C%22adzone%22%3A%22embed%22%7D%7D%5D" width="450" height="300"frameborder="0" allowfullscreen className='news'></iframe></div>
      </div>
    </div>
  </div>
);

export default AboutUs;

