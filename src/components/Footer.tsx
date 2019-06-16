import * as React from 'react';
import WidthWrapper from './layout/WidthWrapper';
import FooterAbout from './footer/FooterAbout';
// import FooterQuickMenu from './footer/FooterQuickMenu';
// import FooterContactInfo from './footer/FooterContactInfo';
// import FooterSocialIcons from './footer/FooterSocialIcons';

const Footer: React.FC = () => {
    return (
        <WidthWrapper>
            <div className="footer-container">
                <FooterAbout />
                {/* <FooterQuickMenu />
                <FooterContactInfo />
                <FooterSocialIcons /> */}
            </div>
        </WidthWrapper>
    )
}

export default Footer;