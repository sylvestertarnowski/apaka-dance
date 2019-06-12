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
            imgOne,
            imgTwo,
        ],
        imgText: [
            "Tańcz z Alpaką albo ZGIŃ!",
            "Jeśli nie lubisz Alpaki - wypad.",
            "Tańcz z Alpaką albo ZGIŃ!",
            "Jeśli nie lubisz Alpaki - wypad.",
        ]
    }

    nextSlide = () => {
        const { imgUrls, currentImageIndex } = this.state;
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index,
        });
    }

    previousSlide = () => {
        const { imgUrls, currentImageIndex } = this.state;
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index,
        });
    }

    render() {
        const { imgUrls, imgText, currentImageIndex } = this.state;

        return (
            <div className="carousel-container">
                <CarouselNavButton 
                    direction="left"
                    glyph="&#9664;"
                    clickFunction={this.nextSlide}
                />

                <ImageSlide 
                    url={ imgUrls[currentImageIndex] }
                    description={ imgText[currentImageIndex] }
                />

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