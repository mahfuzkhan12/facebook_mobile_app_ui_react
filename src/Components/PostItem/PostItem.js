import React from "react";

import PostHead from "./PostHead/PostHead";
import BottomLCS from "./BottomLCS/BottomLCS";

import ImagePostItem from "./ImagePost/ImagePost";
import TextOnlyItem from './TextOnlyPost/TextOnlyPost'


function PostITem(props) {

    var postItem = <TextOnlyItem caption={props.caption} />
    if(props.image) {
        if(props.image.length > 0) {
            postItem = <ImagePostItem caption={props.caption} images={props.image}  />
        }
    }

    return(
        <div>

            {/* post head */}
            <PostHead 
                time={props.time}
                type={props.type}
                location={props.location}
                topText={props.topText}
                user={props.user}
            />
                
            {/* post content */}
            {postItem}

            {/* post bottom */}
            <BottomLCS
                reactions={props.reactions}
                comments={props.comments}
                shares={props.shares}
            />

        </div>
    )

}

export default PostITem