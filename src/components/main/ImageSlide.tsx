import * as React from 'react';

interface P {
    url: string; //string url to be provided
    size?: string | number | undefined;
    position?: string | number | undefined;
}

const ImageSlide: React.FunctionComponent<P> = (props) => {
    const { url, size, position } = props;

    const styles = {
        backgroundSize: size ? size : 'cover',
        backgroundPosition: position ? position : 'center',
        maxWidth: "100%",
    } as React.CSSProperties;

    return (
        <div className="image-slide">
            <img src={url} style={styles} />
        </div>
    )
}

export default ImageSlide;