import React from 'react'

const InfoBox = (props) => {

    let main_css_class = "infobox";
    main_css_class += props.type === "focus" ? " infobox-focus" : ""; 

    return (
        <div className={main_css_class}>
            <h3 className="heading-3">{props.title || "Please provide title"}</h3>
            <p className="text">{props.content || "Please provide content"}</p>
        </div>
    )
}

export default InfoBox
