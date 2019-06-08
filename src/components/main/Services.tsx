import React from 'react';
import TilesWrapper from '../layout/TilesWrapper';
import InfoTile from './InfoTile';

const Services: React.FC = () => {
    return (
        <TilesWrapper>
            <InfoTile
                key="11"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
            <InfoTile
                key="22"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
            <InfoTile
                key="33"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
            <InfoTile
                key="44"
                image=""
                alt="latino dancing"
                title="New Tile"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
            />
        </TilesWrapper>
    )
}

export default Services;