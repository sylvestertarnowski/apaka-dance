import React from 'react';
import NavLink from './NavLink';

const navButtonsData = [
    {
        text: "Strona Główna",
        nav: "home",
        bold: true
    },
    {
        text: "Zajęcia",
        nav: "classes",
        bold: false
    },
    {
        text: "Usługi",
        nav: "services",
        bold: false
    },
    {
        text: "O mnie",
        nav: "about",
        bold: false
    },
    {
        text: "Kontakt",
        nav: "contact",
        bold: false
    },
];

const navButtons = navButtonsData.map(item => {
    return (
        <NavLink
            text={item.text}
            nav={item.nav}
            bold={item.bold}
        />
    )
});

const NavButtonsRight: React.FC = () => {
    return (
        <div id="header-nav-buttons">
            {navButtons}
        </div>
    )
}

export default NavButtonsRight;