import React from 'react';
import '../../css/main/InfoTile.css';

type P = {
    image: string;
    title: string;
    description: string;
    alt: string;
 }

const InfoTile: React.FC<P> = (props) => {
    const { image, title, description, alt } = props;

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
                {description}
            </div>
        </div>
    )
}

export default InfoTile;