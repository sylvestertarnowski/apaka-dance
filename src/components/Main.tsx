import * as React from 'react';
import Carousel from './main/Carousel';
import Services from './main/Services';
import DanceTypes from './main/DanceTypes';
import TileCarousel from './main/TileCarousel';

const Main: React.FC = () => {
    return (
        <div className="main">
            <Carousel />
            <Services />
            <DanceTypes />
            <TileCarousel />
        </div>
    )
}

export default Main;