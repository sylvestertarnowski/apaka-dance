import * as React from 'react';
import FooterSection from './FooterSection';

const FooterContactInfo: React.FC = () => {
    const contactInfoNode = <div className="footer-contact-info">
        <div>
            <p>Wrocław - 53-555</p>
            <p>Edyty Stein 6/66</p>
        </div>
        <div>
            <p>Tel. + (123) 500-600-123</p>
            <p>Mail. alpaka@alpakadance.pl</p>
        </div>
    </div>
    return (
        <FooterSection
            title="Contact Info"
            node={contactInfoNode}
        />
    )
}

export default FooterContactInfo;