import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../assets/img/apartments/a1.png';
import image2 from '../assets/img/apartments/a2.png';
import image3 from '../assets/img/apartments/a3.png';
import image4 from '../assets/img/apartments/a4.png';
import image5 from '../assets/img/apartments/a5.png';


function ImageCarousel() {
    const imageStyle = {
        maxWidth: '200px', // Establece el ancho máximo de las imágenes
        maxHeight: '150px', // Establece la altura máxima de las imágenes
    };

    return (
        <Carousel showArrows={true} showThumbs={false}>
        <div>
          <img src={image1} alt="Image 1" style={imageStyle} />
        </div>
        <div>
          <img src={image2} alt="Image 2" style={imageStyle} />
        </div>
        <div>
          <img src={image3} alt="Image 3" style={imageStyle} />
        </div>
      </Carousel>
    );
  }
export default ImageCarousel;
