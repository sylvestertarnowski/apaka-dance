import * as React from 'react';
import FooterSection from './FooterSection';
import RoundSidesButton from '../layout/RoundSidesButton';

const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet sint vel impedit reprehenderit eius expedita nemo consequatur obcaecati aperiam, blanditiis quia iste in! Assumenda, odio?"

const aboutNode = <div>
    <p>{description}</p>
    <RoundSidesButton 
        description="Read More"
        link="#about"
    />
</div>

const FooterAbout: React.FC = () => {
    return (
        <FooterSection 
            title="About"
            node={aboutNode}
        />
    )
}

export default FooterAbout;