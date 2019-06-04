import React from 'react';
import '../css/layout/TilesWrapper.css';

const TilesWrapper: React.FC = (props) => {
    const { children } = props;
    
    return (
        <div className="tiles-wrapper">
            {children}
        </div>
    )
}

export default TilesWrapper;
