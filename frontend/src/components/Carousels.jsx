import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/carousel.css'
import Carousel_items from '../list/Carousel_items.js'
function Carousels() {
  return (
    <div className="Carousel-div">
    <Carousel 
      className='carousel-root mb-12' 
       showThumbs={false}        
        showStatus={false}       
        infiniteLoop={true}      
        swipeable={true}         
        emulateTouch={true}      
        useKeyboardArrows={true}  
        dynamicHeight={false}     
        autoPlay={true}          
        interval={2000}         
        stopOnHover={true}     
    >
    {
    Carousel_items.map((data, index) => (
      <div key={index}> 
        <img className="socialimg2" src={data.link} alt={`Carousel item ${index}`} />
      </div>
    ))
}

    </Carousel>
    </div>
  );
}

export default Carousels;