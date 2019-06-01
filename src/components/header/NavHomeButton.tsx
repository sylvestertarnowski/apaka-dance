import React from 'react';
import '../../css/header/NavHomeButton.css';

type P = {
    nameStart: string;
    nameEnd: string;
}

const NavHomeButton: React.FC<P> = (props) => {
    const { nameStart, nameEnd } = props;

    return (
        <div id="nav-home-button">
            <a href="#home">
                {nameStart}
                <b>{nameEnd}</b>
            </a>
        </div>
    )
}

export default NavHomeButton;