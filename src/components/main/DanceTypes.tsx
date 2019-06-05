import * as React from 'react';
import InfoTile from './InfoTile';
import '../../css/main/DanceTypes.css';

const DanceTypes: React.FC = () => {
    return (
        <InfoTile 
            title="Dance Types"
            optionalClass="dance-types-container"
        />
    )
}

export default DanceTypes;