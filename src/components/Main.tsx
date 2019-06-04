import * as React from 'react';
import SliderTitle from './main/SliderTitle';
import WidthWrapper from '../layout/WidthWrapper';
import TilesWrapper from '../layout/TilesWrapper';
import InfoTile from '../components/main/InfoTile';

const Main: React.FC = () => {
    return (
        <div className="main">
            <SliderTitle />
            <WidthWrapper>
                <TilesWrapper>
                    <InfoTile
                        image=""
                        title="New Tile"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim ut dolor quis convallis. Sed egestas quis augue id imperdiet. Ut non efficitur lorem. Sed maximus quam et lorem euismod vestibulum."
                    />
                </TilesWrapper>
            </WidthWrapper>
        </div>
    )
}

export default Main;