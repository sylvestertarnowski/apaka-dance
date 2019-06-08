import * as React from 'react';
import CarouselNavButton from './CarouselNavButton';
import '../../css/main/Carousel.css';
import imgOne from '../../img/slide-one.jpg';
import imgTwo from '../../img/slide-two.jpg';
import ImageSlide from './ImageSlide';

class Carousel extends React.Component {
    render() {

        return (
            <div className="carousel-container">
                {/* <CarouselNavButton 
                    direction="<"
                /> */}
                <ImageSlide url={ imgOne } />
                {/* <ImageSlide url={ imgTwo } />
                <CarouselNavButton
                    direction=">"
                /> */}
            </div>
        )
    }
}

export default Carousel;