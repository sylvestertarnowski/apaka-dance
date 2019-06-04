import * as React from 'react';
import CarouselNavButton from './CarouselNavButton';
import '../../css/main/Carousel.css';

class Carousel extends React.Component {
    render() {
        const divOne = <div>Czerp radość z tańca</div>;
        // const divTwo = <div>Bądź najlepszym tancerze na dzielni</div>;
        return (
            <div className="carousel-container">
                <CarouselNavButton 
                    direction="<"
                />
                {divOne}
                <CarouselNavButton
                    direction=">"
                />
            </div>
        )
    }
}

export default Carousel;