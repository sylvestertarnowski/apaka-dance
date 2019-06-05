import React, { ReactNode } from 'react';
import '../../css/main/InfoTile.css';

type P = {
    image?: string;
    title: string;
    icon?: string;
    description?: string;
    node?: ReactNode;
    alt?: string;
    optionalClass?: string;
}

const InfoTile: React.FC<P> = (props) => {
    const { image, title, description, alt, node, icon, optionalClass } = props;

    const faIcon = <i className={`${icon}`}></i>;
    const tileImage = <img src={`${image}`} alt={`${alt}`} />;
    let finalResult: JSX.Element | null;

    if (image) {
        finalResult = tileImage;
    } else if (icon) {
        finalResult = faIcon;
    } else {
        finalResult = null;
    }

    return (
        <div className={`info-tile ${optionalClass}`}>
            {finalResult}
            <div className="info-tile-title">
                {title}
            </div>
            <div className="info-tile-description">
                {description ? description : (node && node)}
            </div>
        </div>
    )
}

export default InfoTile;