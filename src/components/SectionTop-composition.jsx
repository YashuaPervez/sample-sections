import React from 'react';

import DemoImage1 from "../images/demo1.png";
import DemoImage2 from "../images/demo2.png";

const SectionTop_composition = () => {
    return (
        <div className="SectionTop-composition col-1-of-2">
            <img src={DemoImage1} alt="This is demo image for placehold purpose" className="SectionTop-composition-image1"/>
            <img src={DemoImage2} alt="This is demo image for placehold purpose" className="SectionTop-composition-image2"/>
        </div>
    )
}

export default SectionTop_composition;
