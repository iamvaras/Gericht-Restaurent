import React from 'react';
import { SubHeading } from '../../components';
import Button from '../../components/Button';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const imagesGallery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const{current} = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  }

  return(
    <div className="app__gallery">
      <div className="app__gallery-content">
        <SubHeading text='Instagram'></SubHeading>
        <h2>Photo Gallery</h2>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <Button text='View More'/>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            imagesGallery.map( (image, index) => (
              <div className="app__gallery-images_card" key={`gallery_image-${index+1}`}>
                <img src={image} alt="" />
                <BsInstagram className='gallery__image-icon'/>
              </div>
            ))
          }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={ () => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={ () => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
