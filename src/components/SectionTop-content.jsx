import React from 'react';

import IconList from "./IconList";

const SectionTop_content = () => {
    return (
        <div className="SectionTop-content col-1-of-2">
            <h2 className="heading-main">
                Move your teams
                <span className="heading-main__prominent"> and your business</span>
            </h2>
            <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor inventore, nam tempora deserunt quo.
            </p>
            <p className="text pad-top-50">
            Available On
            <IconList />
            </p>
        </div>
    )
}

export default SectionTop_content;
