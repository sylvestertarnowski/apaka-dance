import * as React from 'react';
import '../../css/main/ImageInfo.css';

type P = {
    imgSrc: string;
    danceType: string;
    description: string;
}

const ImageInfo: React.FC<P> = (props) => {
    const { imgSrc, danceType, description } = props;
    const styles = {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="image-info-container" style={styles}>
            <div className="image-info-description">
                <h2>{danceType}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ImageInfo;