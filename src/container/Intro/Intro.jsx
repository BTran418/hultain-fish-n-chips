import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
  <div className='app__bg app__wrapper'>
    <div className='intro__video'>
      <video 
        src={ meal }
        ref={ vidRef }
        type={ "video/mp4" }
        loop={ true }
        controls={ false }
        muted={ true }
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={ handleVideo }>
          {
            playVideo ? (
              <BsPauseFill color='#ffff' fontSize={30}/>
              ) : (
              <BsFillPlayFill color='#ffff' fontSize={30}/>
            )
          }
        </div>
      </div>
    </div>
  </div>
  )
};

export default Intro;
