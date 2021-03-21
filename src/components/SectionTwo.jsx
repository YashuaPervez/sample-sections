import React from 'react';

import InfoBox from "./InfoBox";
import SmartPhone from "../images/phone.png";

const SectionTwo = () => {
    return (
        <div className="SectionTwo">
            <div className="grid">
                <div className="col-1-of-2 item-center">
                    <img src={SmartPhone} className="contained-image"/>
                </div>
                <div className="col-1-of-2 item-center">
                    <InfoBox type="default" title="Lorem ipsum dolor sit amet consectetur." content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo amet saepe est dolores voluptate officiis dignissimos inventore quibusdam fuga assumenda." />
                    <InfoBox type="focus" title="Adipisicing elit. Ad cumque, odio esse temporibus." content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo amet saepe est dolores voluptate officiis dignissimos inventore quibusdam fuga assumenda."  />
                    <InfoBox type="default" title="Aoloribus ratione repellat voluptate nam similique blanditiis." content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo amet saepe est dolores voluptate officiis dignissimos inventore quibusdam fuga assumenda."  />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
