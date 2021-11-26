import React from "react";

import C from './../PostItem.module.css'



function TextOnlyItem(props) {

    var captionText = props.caption;

    if(captionText.length > 120) {
        captionText = <span>
            {captionText.substring(0, 110)} 
            <span>...</span> 
            <span className={C.captionSeemore}>See more</span>
        </span>;
    }else if(captionText.length < 30) {
        captionText = <span className={C.CaptionTextBBB}>
            {captionText} 
        </span>;
    }else if(captionText.length < 50) {
        captionText = <span className={C.CaptionTextB}>
            {captionText} 
        </span>;
    }else if(captionText.length < 80) {
        captionText = <span className={C.CaptionTextB}>
            {captionText} 
        </span>;
    }  
    
    var caption = null;
    if(props.caption) {
        caption = (<div className={C.Caption}>
                <span>
                    {captionText}
                </span>
            </div>)
    }

    return(
        <div className={C.PostContentWrapper}>

            {caption}

        </div>
    )

}

export default TextOnlyItem