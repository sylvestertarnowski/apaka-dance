import * as React from 'react';
import CarouselNavButton from './CarouselNavButton';
import '../../css/main/Carousel.css';
import imgOne from '../../img/placeholder-dance.jpg';
import imgTwo from '../../img/placeholder-dance2.jpg';
import ImageSlide from './ImageSlide';

class Carousel extends React.Component {
    render() {

        return (
            <div className="carousel-container">
                <CarouselNavButton 
                    direction="<"
                />
                <ImageSlide url={ imgOne } />
                <CarouselNavButton
                    direction=">"
                />
            </div>
        )
    }
}

export default Carousel;