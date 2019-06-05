import * as React from 'react';
import Carousel from './main/Carousel';
import Services from './main/Services';
import DanceTypes from './main/DanceTypes';

const Main: React.FC = () => {
    return (
        <div className="main">
            <Carousel />
            <Services />
            <DanceTypes />
        </div>
    )
}

export default Main;