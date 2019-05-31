import React from 'react';

type NavLink = {
    text: string;
    bold?: boolean;
}

const NavLink: React.FC<NavLink> = (props) => {
    const { text, bold } = props;

    return (
        <div>
            <a></a>
        </div>
    )
}

export default NavLink;