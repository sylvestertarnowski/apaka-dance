import * as React from 'react';

type P = {
    glyph: string;
    direction: string; 
    clickFunction: () => void;
}

const CarouselNavButton: React.FC<P> = (props) => {
    const { glyph, direction, clickFunction } = props;

    return (
        <div
            className={`slide-arrow-${direction}`}
            onClick={clickFunction}
        >
            {glyph}
        </div>
    )
}

export default CarouselNavButton;