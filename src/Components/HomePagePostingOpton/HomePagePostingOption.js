import React from "react";

import C from './PostingOption.module.css'

// avatar
import Avatar from '../../assets/images/user/user_profile.jpg'
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { ReactComponent as Live } from '../../assets/icons/postDetails/live.svg'
import { ReactComponent as Image } from '../../assets/icons/postDetails/image.svg'
import { ReactComponent as Emoji } from '../../assets/icons/postDetails/emoji.svg'

function HomePagePostingOption (props) {


    return(
        <div className={C.Wrapper}>

            <div className={C.top}>

                <div className={C.Avatar}>
                    <img src={Avatar} alt="User" />
                </div>
                <div className={C.newPostButton}>
                    <Button>
                        What's on your mind?
                    </Button>
                </div>

            </div>

            <div className={C.Bottom}>
                <div className={C.Items}>
                    <IconButton>
                        <Live /> <span className={C.Text}>Live</span>
                    </IconButton>
                </div>
                <div className={C.Items}>
                    <IconButton>
                        <Image /> <span className={C.Text}>Photo</span>
                    </IconButton>
                </div>
                <div className={C.Items}>
                    <IconButton>
                        <Emoji /> <span className={C.Text}>Felling</span>
                    </IconButton>
                </div>
            </div>

        </div>
    );

}


export default HomePagePostingOption