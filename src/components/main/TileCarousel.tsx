import * as React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import InfoTile from './InfoTile';
import WidthWrapper from '../layout/WidthWrapper';
import '../../css/main/TileCarousel.css';

class TileCarousel extends React.Component {
    tiles = [
        <InfoTile
                key="115"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />,
            <InfoTile
                key="225"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />,
            <InfoTile
                key="335"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />,
            <InfoTile
                key="445"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
    ]

    render() {
        return (
            <div className="tile-carousel-container">
            <WidthWrapper>
                <InfoTile
                    title="Wspierane Aktywności"
                    node={
                        <Carousel
                            arrows
                        >
                            {this.tiles}
                        </Carousel>
                    }
                />
            </WidthWrapper>
            </div>

        )
    }
}

export default TileCarousel;