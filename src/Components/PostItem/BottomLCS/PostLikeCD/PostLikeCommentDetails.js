import React from "react";

import C from '../bottom.module.css'

import ReactionsImage from "../../../../assets/reactions/Reactions";

function PostLikeCommentDetails(props) {

    const reactArray = props.reactions

    var reactions = null
    var totalReactions = null
    if(reactArray) {

        reactArray.sort(function (a, b) {
            return a.reactions - b.reactions
        })
        const max = reactArray[reactArray.length - 1] ? reactArray[reactArray.length - 1] : null
        const secondMax = reactArray[reactArray.length - 2] ? reactArray[reactArray.length - 2] : null
        const thirdMax = reactArray[reactArray.length - 3] ? reactArray[reactArray.length - 3] : null

        reactions = (<>
            {max ? max.reactions > 0 ? <div className={C.Img + " " + C.HasNext + " " + C.First}>
                    <img src={ReactionsImage[max.react]} alt={max.react} />
                </div> : null : null}

            {secondMax ? secondMax.reactions > 0 ? <div className={C.Img + " " + C.HasPrev + " " + C.HasNext + " " + C.Second}>
                    <img src={ReactionsImage[secondMax.react]} alt={secondMax.react} />
                </div> : null : null}
            
            {thirdMax ? thirdMax.reactions > 0 ? <div className={C.Img + " " + C.HasPrev}>
                    <img src={ReactionsImage[thirdMax.react]} alt={thirdMax.react} />
                </div> : null  : null}
        </>)

        totalReactions = reactArray.reduce((a, b) => a + b.reactions, 0)
        
    }


    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    function abbreviateNumber(number){
    
        // what tier? (determines SI symbol)
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
    
        // if zero, we don't need a suffix
        if(tier === 0) return number;
    
        // get suffix and determine scale
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
    
        // scale the number
        var scaled = number / scale;
    
        // format number and add suffix
        return scaled.toFixed(1) + suffix;
    }

    totalReactions = abbreviateNumber(totalReactions)
    const totalComments = abbreviateNumber(props.comments)
    const totalShares = abbreviateNumber(props.shares)


    return(

        <div className={C.DetailsWrapper}>
            
            <div className={C.Wrapper}>

                <div className={C.Reactions}>

                    {/* <div className={C.Img + " " + C.HasNext + " " + C.First}>
                        <img src={ReactionsImage.love} alt="Love" />
                    </div>
                    <div className={C.Img + " " + C.HasPrev + " " + C.HasNext + " " + C.Second}>
                        <img src={ReactionsImage.like} alt="Like" />
                    </div>
                    <div className={C.Img + " " + C.HasPrev}>
                        <img src={ReactionsImage.wow} alt="Wow" />
                    </div> */}

                    {reactions}

                    <div className={C.ReactItem}>
                        <span className={C.Text}>{totalReactions}</span>
                    </div>

                </div>

                <div className={C.Text}>
                    {props.comments ? <span className={C.Comments}>{totalComments} Comments</span> : null}
                    {props.shares && props.comments ? <span className={C.Dot}> · </span> : null }
                    {props.shares ? <span className={C.Type}> {totalShares} Shares </span> : null}
                </div>

            </div>

        </div>
        

    )

}


export default PostLikeCommentDetails