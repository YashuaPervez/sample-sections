import React from 'react';

import AppleLogo from "../images/apple_logo.png";
import GoogleLogo from "../images/google_logo.png"

const IconList = () => {
    return (
        <ul className="IconList pad-top-20">
            <li className="IconList__item">
                <img src={GoogleLogo} />
            </li>
            <li className="IconList__item">
                <img src={AppleLogo} />
            </li>
        </ul>
    )
}

export default IconList
