import React from "react";

import LCSIcon from '../../../assets/icons/post/likeC.png'

import C from './bottom.module.css'
import Divider from '../../Divider/Divider'

////icons
import { Button } from "@material-ui/core";
import PostLikeCommentDetails from "./PostLikeCD/PostLikeCommentDetails";

function BottomLCS(props) {


    var LikeIconStyle = {
        backgroundImage: `url(${LCSIcon})`
    };

    const reactions = props.reactions


    return(

        <>

            <PostLikeCommentDetails comments={props.comments} shares={props.shares} reactions={reactions} />

            <div className={C.LikeCSWrapper}>
                <div className={C.Wrapper}>

                    {/* like button */}
                    <div className={C.Item + " " + C.LikeButton}>
                        <Button>
                            <div className={C.ItemWrapp}>
                                <div className={C.Icon}>
                                    <i className={C.LikeIcon} style={LikeIconStyle}></i> 
                                </div>
                                <div className={C.text}>Like</div>
                            </div>
                        </Button>
                    </div>
                    
                    {/* comment button */}
                    <div className={C.Item + " " + C.LikeButton}>
                        <Button>
                            <div className={C.ItemWrapp}>
                                <div className={C.Icon}>
                                    <i className={C.CommentIcon} style={LikeIconStyle}></i> 
                                </div>
                                <div className={C.text}>Comment</div>
                            </div>
                        </Button>
                    </div>

                    {/* share button */}
                    <div className={C.Item + " " + C.LikeButton}>
                        <Button>
                            <div className={C.ItemWrapp}>
                                <div className={C.Icon}>
                                    <i className={C.ShareIcon} style={LikeIconStyle}></i> 
                                </div>
                                <div className={C.text}>Share</div>
                            </div>
                        </Button>
                    </div>

                </div>
            </div>

            <Divider />
        </>
    )

}


export default BottomLCS