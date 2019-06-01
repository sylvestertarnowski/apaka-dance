import * as React from 'react';
import WidthWrapper from '../layout/WidthWrapper';
import NavButtonsRight from './header/NavButtonsRight';
import NavHomeButton from './header/NavHomeButton';
import '../css/header/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <WidthWrapper>
                <div className="header-container">
                    <NavHomeButton 
                        nameStart="alpaka"
                        nameEnd="Dance"
                    />
                    <NavButtonsRight />
                </div>
            </WidthWrapper>
        </div>
    )
}

export default Header;