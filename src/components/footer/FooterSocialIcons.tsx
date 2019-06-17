import * as React from 'react';
import FooterSection from './FooterSection';

const FooterSocialIcons: React.FC = () => {
    const socialIconsNode = <div>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-spotify"></i>
    </div>
    return (
        <FooterSection
            title="Social Icons"
            node={socialIconsNode}
        />
    )
}

export default FooterSocialIcons;