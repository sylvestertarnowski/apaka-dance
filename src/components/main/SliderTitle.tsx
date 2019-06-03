import * as React from 'react';
import '../../css/main/SliderTitle.css';

class SliderTitle extends React.Component {
    render() {
        const divOne = <div>Czerp radość z tańca</div>;
        const divTwo = <div>Bądź najlepszym tancerze na dzielni</div>;
        return (
            <div className="slider-title-container">
                <div>{"<-"}</div>
                {divOne}
                <div>{"->"}</div>
            </div>
        )
    }
}

export default SliderTitle;