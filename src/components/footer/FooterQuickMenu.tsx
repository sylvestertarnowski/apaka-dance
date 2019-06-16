import * as React from 'react';
import FooterSection from './FooterSection';
import '../../css/footer/FooterQuickMenu.css';

const FooterQuickMenu: React.FC = () => {
    const quickMenuNode = <ul className="quick-menu-list">
        <li><a href="#home">Strona Główna</a></li>
        <li><a href="#classes">Zajęcia</a></li>
        <li><a href="#services">Usługi</a></li>
        <li><a href="#about">O mnie</a></li>
        <li><a href="#contact">Kontakt</a></li>
    </ul>

    return (
        <FooterSection
            title="Quick Menu"
            node={quickMenuNode}
        />
    )
}

export default FooterQuickMenu;