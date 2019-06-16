import * as React from 'react';
import '../../css/layout/RoundSidesButton.css';

interface P {
    description: string;
    backgroundColor?: string;
    textColor?: string;
}

const RoundSidesButton: React.FC<P> = (props) => {
    const { description, backgroundColor, textColor } = props;
    const styles = {
        backgroundColor: backgroundColor ? backgroundColor : "rgb(242, 58, 45)",
        color: textColor ? textColor : "#fff",
    } as React.CSSProperties;

    return (
        <button className="round-sides-button" style={styles}>
            {description}
        </button>
    )
}

export default RoundSidesButton;