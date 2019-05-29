import * as React from 'react';
import WidthWrapper from '../layout/WidthWrapper';
import '../css/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <WidthWrapper>
                Header Upper
                Header Lower
            </WidthWrapper>
        </div>
    )
}

export default Header;