import * as React from 'react';

interface P {
    description: string;
    color?: string;
}

const RoundSidesButton: React.FC<P> = (props) => {
    const { description } = props;

    return (
        <button className="round-side-button">
            {description}
        </button>
    )
}

export default RoundSidesButton;