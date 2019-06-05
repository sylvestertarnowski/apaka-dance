import * as React from 'react';

type P = {
    imgAlt: string;
    imgSrc: string;
    danceType: string;
    description: string;
}

const ImageInfo: React.FC<P> = (props) => {
    const { imgAlt, imgSrc, danceType, description } = props;

    return (
        <div>
            <img src={imgSrc} alt={imgAlt} />
            <div>
                <h2>{danceType}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ImageInfo;