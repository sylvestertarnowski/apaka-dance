import * as React from 'react';
import CarouselNavButton from './CarouselNavButton';
import '../../css/main/Carousel.css';
import imgOne from '../../img/slide-one.jpg';
import imgTwo from '../../img/slide-two.jpg';
import ImageSlide from './ImageSlide';


class Carousel extends React.Component {
    readonly state = {
        currentImageIndex: 0,
        imgUrls: [
            imgOne,
            imgTwo,
        ]
    }

    nextSlide = () => {

    }

    previousSlide = () => {

    }

    render() {
        const { imgUrls, currentImageIndex } = this.state;

        return (
            <div className="carousel-container">
                <CarouselNavButton 
                    direction="left"
                    glyph="&#9664;"
                    clickFunction={this.nextSlide}
                />

                <ImageSlide url={ imgUrls[currentImageIndex] } />

                <CarouselNavButton
                    direction="right"
                    glyph="&#9654;"
                    clickFunction={this.previousSlide}
                />
            </div>
        )
    }
}

export default Carousel;