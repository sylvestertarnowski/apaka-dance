import * as React from 'react';
import WidthWrapper from '../layout/WidthWrapper';
import NavButtonsRight from './header/NavButtonsRight';
import '../css/header/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <WidthWrapper>
                <div className="header-container">
                    <div id="header-logo-button">alpakaDance</div>
                    <NavButtonsRight />
                </div>
            </WidthWrapper>
        </div>
    )
}

export default Header;