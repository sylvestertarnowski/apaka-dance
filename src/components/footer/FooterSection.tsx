import * as React from 'react';
import '../../css/footer/FooterSection.css';

interface P {
    title: string;
    description?: string;
    node?: React.ReactNode;
}

const FooterSection: React.FC<P> = (props) => {
    const { title, description, node } = props;
    const contents = description ? description : node;
    
    return (
        <div className="footer-section">
            <h2>{title}</h2>
            <div>{contents}</div>
        </div>
    )
}

export default FooterSection;