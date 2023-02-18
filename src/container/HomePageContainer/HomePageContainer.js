import React from 'react';
import ScrollContent from '../../Components/Content/ScrollContent'

import Divider from '../../Components/Divider/Divider'
import HomePagePostingOption from '../../Components/HomePagePostingOpton/HomePagePostingOption';

import Stories from './Stories';

import posts from '../../Data/posts';
import PostITem from '../../Components/PostItem/PostItem';


class HomePageContainer extends React.Component {


  render() {


    var HomePosts = null;

    if(posts) {
      if(posts.length > 0) {
        
          const shuffle = [...posts].sort(() => Math.random() - 0.5);
          HomePosts = shuffle.map((item, key) => {

            return(
              <PostITem
              
                key={item.id}

                // content
                caption={item.caption}
                image={item.image}

                // for bottom
                reactions={item.reactions}
                comments={item.comments}
                shares={item.shares}

                // for head
                time={item.time}
                type={item.type}
                location={item.location}
                topText={item.topText}

                // user of the post
                user={item.user}
              
              />
            )

          })

      }
    }


    return (

      <ScrollContent>
          
        <HomePagePostingOption />
        <Divider />

        {/* stories */}
        <Stories />
        <Divider />


        {/* posts */}
        {HomePosts}


      </ScrollContent>

    )
  }
}

export default HomePageContainer;
