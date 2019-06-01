import * as React from 'react';
import WidthWrapper from '../layout/WidthWrapper';
import NavLink from '../layout/NavLink';
import '../css/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <WidthWrapper>
                <div className="header-container">
                    <div id="header-logo-button">alpakaDance</div>
                    <div id="header-nav-buttons">
                        <NavLink 
                            text="Strona Główna"
                            nav="home"
                            bold={true}
                        />
                        <NavLink 
                            text="Zajęcia"
                            nav="classes"
                        />
                        <div>Usługi</div>
                        <div>O mnie</div>
                        <div>Kontakt</div>
                    </div>
                </div>
            </WidthWrapper>
        </div>
    )
}

export default Header;