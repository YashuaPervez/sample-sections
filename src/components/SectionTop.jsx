import React from 'react';

import Content from "./SectionTop-content";
import Composition from "./SectionTop-composition";

const Section1 = () => {
    return (
        <div className="SectionTop">
            <div className="grid">
                <Content />
                <Composition />
            </div>
            
        </div>
    )
}

export default Section1;
