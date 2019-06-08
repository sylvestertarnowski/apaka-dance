import * as React from 'react';

interface P {
    url: string; //string url to be provided
    size?: string | number | undefined;
    position?: string | number | undefined;
}

const ImageSlide: React.FunctionComponent<P> = (props) => {
    const { url, size, position } = props;

    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: size ? size : 'cover',
        backgroundPosition: position ? position : 'center',
    } as React.CSSProperties;

    return (
        <div className="image-slide" style={styles}>
        </div>
    )
}

export default ImageSlide;