import React from 'react';

const WidthWrapper: React.FC = ({ children }) => {
    return (
        <div className="width-wrapper" style={{ maxWidth: "1000px", flex: 1 }}>
            {children}
        </div>
    )
}

export default WidthWrapper;