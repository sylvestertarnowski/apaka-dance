import * as React from 'react';
import SliderTitle from './main/SliderTitle';
import DanceTypes from './main/DanceTypes';

const Main: React.FC = () => {
    return (
        <div className="main">
            <SliderTitle />
            <DanceTypes />
        </div>
    )
}

export default Main;