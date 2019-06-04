import * as React from 'react';

type P = {
    direction: "<" | ">";
}

const CarouselNavButton: React.FC<P> = (props) => {
    const { direction } = props;

    return (
        <button>
            {direction}
        </button>
    )
}

export default CarouselNavButton;