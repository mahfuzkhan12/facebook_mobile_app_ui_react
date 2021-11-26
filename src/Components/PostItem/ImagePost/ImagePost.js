import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


import C from './../PostItem.module.css'

import Placeholder from '../../../assets/images/posts/placeholder.png'


function ImagePostItem(props) {

    var captionText = props.caption;

    if(captionText.length > 120) {
        captionText = <span>
            {captionText.substring(0, 110)} 
            <span>...</span> 
            <span className={C.captionSeemore}>See more</span>
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

    var firsImage = null
    if(props.images) {
        if(props.images.length > 0) {
            firsImage = <LazyLoadImage
                        alt={"Post Image"}
                        src={props.images[0].src}
                        placeholder={<span className={"helo"}><img src={Placeholder} /></span>}
                    />;
        }
    }

    return(
        <div className={C.PostContentWrapper}>

            {caption}

            <div className={C.SingleImage}>
                <div className={C.Image}>
                    {firsImage}
                </div>
            </div>
        </div>
    )

}

export default ImagePostItem