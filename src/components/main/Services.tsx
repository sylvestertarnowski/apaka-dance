import React from 'react';
import TilesWrapper from '../layout/TilesWrapper';
import InfoTile from './InfoTile';

const Services: React.FC = () => {
    return (
        <TilesWrapper>
            <InfoTile
                key="115"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
            <InfoTile
                key="225"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
            <InfoTile
                key="335"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
            <InfoTile
                key="445"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
        </TilesWrapper>
    )
}

export default Services;