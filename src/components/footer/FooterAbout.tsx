import * as React from 'react';
import FooterSection from './FooterSection';
import RoundSidesButton from '../layout/RoundSidesButton';
import '../../css/footer/FooterAbout.css';


const FooterAbout: React.FC = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet sint vel impedit reprehenderit eius expedita nemo consequatur obcaecati aperiam, blanditiis quia iste in! Assumenda, odio?"

    const aboutNode = <div className="footer-about">
        <p>{description}</p>
        <RoundSidesButton
            description="Read More"
            link="#about"
        />
    </div>

    return (
        <FooterSection
            title="About"
            node={aboutNode}
        />
    )
}

export default FooterAbout;