import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImgs  = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => { 

  const scrollRef = React.useRef(null);
  const scroll = ( direction ) => {
    const { current } = scrollRef;
    if ( direction === 'left' ) {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram'/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>From the Ocean straight to your table with the freshest ingredients. Everything we make is locally source and locally grown allowing us to keep our prices low and your tummies full! We believe in being able to treat you to a home cooked meal, but still have a luxrious and local feel. Our recipe has been passed down for generations since we have opened in 1924.</p>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={ scrollRef }>
        {galleryImgs.map((image, index) => (
          // eslint-disable-next-line no-template-curly-in-string
          <div className='app__gallery-images_card flex__center' key={'gallery_images-${ index+1 }'}>
            <img src={image} alt='gallery' />
            <BsInstagram className='gallery__image-icon' />
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
      <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
      <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>)
};

export default Gallery;
