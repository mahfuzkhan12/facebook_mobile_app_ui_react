import React from "react";

import Slider from "react-slick";

import StoryItem from "../../Components/StoryItem/StoryItem"; /// import story item component
import C from './HomePageContainer.module.css' // import stylesheet

import stories from '../../Data/stories';



class Stories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          stories: [],
          laoded: false,
          reachedStart: false,
          reachedEnd: false,
          itemWidth: 0
        }
    }


    componentDidMount() {

        if(!this.state.laoded) {
            this.setState({ stories: stories, laoded: true});
        }

    }



    render() {

        const Slidersettings = {
            infinite: false,
            speed: 500,
            slidesToShow: 3.5,
            slidesToScroll: 2,
            lazyLoad: true,
            autuplay: false,
            swipeToSlide: true
          };

        // var storyItems = <Spinner />
        var storyItems = this.state.stories.map((slide, index) => {
            return (
                <StoryItem image={slide.image} userName={slide.userName} avatar={slide.avatar} key={slide.id} />
                // <img src={slide.image} key={slide.id} />
            )
        });


        return(
            <div className={C.StoryWrapper}>
                <Slider {...Slidersettings}>
                    
                    {storyItems}

                </Slider>
            </div>
        );
    }
}  

export default Stories