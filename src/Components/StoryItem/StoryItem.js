import React from "react";

import C from './StoryItem.module.css';

function StoryItem(props) {


    return(
        <div className={C.StoryItemWrapper}>

            <div className={C.Avatar}>
                <img src={props.avatar} alt={props.userName} />
            </div>

            <div className={C.StoryImg}>
                <img src={props.image} alt={props.userName} />
            </div>

            <div className={C.Name}>
                <span>{props.userName}</span>
            </div>

        </div>
    );
}


export default StoryItem;