import React, { ReactChildren } from 'react';
import '../../css/main/InfoTile.css';

type P = {
    image: string;
    title: string;
    description?: string;
    node?: ReactChildren;
    alt: string;
 }

const InfoTile: React.FC<P> = (props) => {
    const { image, title, description, alt, node } = props;

    return (
        <div className="info-tile">
            <img 
                src={`${image}`}
                alt={`${alt}`}
            />
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