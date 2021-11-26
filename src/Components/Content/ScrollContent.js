import React from 'react';
import C from './ScrollContent.module.css';

function ScrollContent (props) {

    return(

        <div>
            <div className={C.Wrapper}>
                {props.children}
            </div>
        </div>
    )
    
}

export default ScrollContent;