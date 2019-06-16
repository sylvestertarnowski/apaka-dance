import * as React from 'react';
import '../../css/layout/RoundSidesButton.css';

interface P {
    description: string;
    link: string;
    backgroundColor?: string;
    textColor?: string;
}

const RoundSidesButton: React.FC<P> = (props) => {
    const { description, backgroundColor, textColor, link } = props;
    const styles = {
        backgroundColor: backgroundColor ? backgroundColor : "rgb(242, 58, 45)",
        color: textColor ? textColor : "#fff",
    } as React.CSSProperties;

    return (
        <div className="round-sides-button" style={styles}>
            <a href={`${link}`}>{description}</a>
        </div>
    )
}

export default RoundSidesButton;