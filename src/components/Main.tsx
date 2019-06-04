import * as React from 'react';
import Carousel from './main/Carousel';
import DanceTypes from './main/DanceTypes';

const Main: React.FC = () => {
    return (
        <div className="main">
            <Carousel />
            <DanceTypes />
        </div>
    )
}

export default Main;