import * as React from 'react';
import '../../css/main/SliderTitle.css';

class SliderTitle extends React.Component {
    render() {
        return (
            <div className="slider-title-container">
                <div>{"<-"}</div>
                <div>Grow your dancing Abilities!</div>
                <div>{"->"}</div>
            </div>
        )
    }
}

export default SliderTitle;