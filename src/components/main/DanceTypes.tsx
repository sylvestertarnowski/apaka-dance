import * as React from 'react';
import InfoTile from './InfoTile';
import ImageInfo from './ImageInfo';
import '../../css/main/DanceTypes.css';
import imageOne from '../../img/placeholder-dance.jpg';
import imageTwo from '../../img/placeholder-dance2.jpg';

const exampleImageInfo = [
    <ImageInfo
        key="1"
        imgSrc={imageOne}
        imgAlt="New Style Hustle Example"
        danceType="New Style Hustle"
        description="Suspendisse augue velit, lacinia eget mollis at, faucibus vitae ante. Etiam nec diam in nisi congue maximus."
    />,
    <ImageInfo
        key="2"
        imgSrc={imageTwo}
        imgAlt="Waltz Example"
        danceType="Waltz"
        description="Suspendisse augue velit, lacinia eget mollis at, faucibus vitae ante. Etiam nec diam in nisi congue maximus."
    />,
    <ImageInfo
        key="3"
        imgSrc={imageOne}
        imgAlt="New Style Hustle Example"
        danceType="New Style Hustle"
        description="Suspendisse augue velit, lacinia eget mollis at, faucibus vitae ante. Etiam nec diam in nisi congue maximus."
    />,
    <ImageInfo
        key="4"
        imgSrc={imageTwo}
        imgAlt="Waltz Example"
        danceType="Waltz"
        description="Suspendisse augue velit, lacinia eget mollis at, faucibus vitae ante. Etiam nec diam in nisi congue maximus."
    />,
    <ImageInfo
        key="5"
        imgSrc={imageOne}
        imgAlt="New Style Hustle Example"
        danceType="New Style Hustle"
        description="Suspendisse augue velit, lacinia eget mollis at, faucibus vitae ante. Etiam nec diam in nisi congue maximus."
    />,
    <ImageInfo
        key="6"
        imgSrc={imageTwo}
        imgAlt="Waltz Example"
        danceType="Waltz"
        description="Suspendisse augue velit, lacinia eget mollis at, faucibus vitae ante. Etiam nec diam in nisi congue maximus."
    />,
]

const DanceTypes: React.FC = () => {

    return (
        <InfoTile
            title="Dance Types"
            optionalClass="dance-types"
            node={
                <div
                    className="dance-types-image-container"
                >
                    {exampleImageInfo}
                </div>
            }
        />
    )
}

export default DanceTypes;