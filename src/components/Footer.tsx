import * as React from 'react';
import '../css/footer/Footer.css';
import WidthWrapper from './layout/WidthWrapper';
import FooterAbout from './footer/FooterAbout';
import FooterQuickMenu from './footer/FooterQuickMenu';
// import FooterContactInfo from './footer/FooterContactInfo';
// import FooterSocialIcons from './footer/FooterSocialIcons';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <WidthWrapper>
                <FooterAbout />
                <FooterQuickMenu />
                {/* <FooterContactInfo />
                <FooterSocialIcons /> */}
            </WidthWrapper>
        </div>
    )
}

export default Footer;