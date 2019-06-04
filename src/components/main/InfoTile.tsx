import React from 'react';
import '../../css/main/InfoTile.css';

type P = {
    image: string;
    title: string;
    description: string;
 }

const InfoTile: React.FC<P> = (props) => {
    const { image, title, description } = props;

    return (
        <div className="info-tile">
            <img src={`${image}`} />
            <div className="info-tile-title">{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default InfoTile;