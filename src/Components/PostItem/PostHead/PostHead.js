import React from "react";

import C from './Posthead.module.css'

import { ReactComponent as Public } from '../../../assets/icons/post/public.svg'
import { ReactComponent as Friend } from '../../../assets/icons/post/friend.svg'
import { ReactComponent as Custom } from '../../../assets/icons/post/custom.svg'


import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Close } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";



function PostHead(props) {


    var type = <Friend />;

    if(props.type === 'public') {
        type = <Public />
    }else if(props.type === 'custom') {
        type = <Custom />
    }


    const rightButton = (<div className={C.RightButtons}>
            <div className={C.RightButtonItem + " " + C.DotItem}>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            </div>
            <div className={C.RightButtonItem + " " + C.CloseItem}>
                <IconButton>
                    <Close />
                </IconButton>
            </div>
        </div>)

    var rightIconButton = rightButton
    var top = '';
    if(props.topText !== '') {
        rightIconButton = '';

        top = (<div className={C.TopWrapper}>
            <div className={C.Wrapper}>
                <div className={C.text}>
                    {props.topText}
                </div>
                {rightButton}
            </div>
        </div>)
    }


    return(
        <div className={C.PostHeadWrapper}>

            {top}

            <div className={C.UserDWrapper}>

                <div className={C.UserDetails}>

                    <div className={C.ProfileImage}>
                        <img src={props.user.avatar} alt={props.user.name} />
                    </div>

                    <div className={C.NameAndD}>
                        <div className={C.Name}>

                            <span> {props.user.name} </span>

                        </div>


                        <div className={C.PostDetails}>

                            <span className={C.Time}>{props.time}</span>
                            <span className={C.Dot}> · </span>
                            <span className={C.Type}> {type} </span>
 
                        </div>


                    </div>

                </div>


                {rightIconButton}

            </div>
        </div>
    )

}




export default PostHead