import React from 'react';

const WidthWrapper: React.FC = ({ children }) => {
    return (
        <div className="width-wrapper" style={{ maxWidth: "1000px", minWidth: 0}}>
            {children}
        </div>
    )
}

export default WidthWrapper;