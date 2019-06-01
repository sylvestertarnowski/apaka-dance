import React from 'react';

type NavLink = {
    text: string;
    nav: string;
    bold?: boolean;
}

const NavLink: React.FC<NavLink> = (props) => {
    const { text, bold, nav } = props;

    const weight = bold ? 600 : 400;

    const style = {
        fontWeight: weight,
    }

    return (
        <div style={style}>
            <a href={`#${nav}`}>{text}</a>
        </div>
    )
}

export default NavLink;