

import image1 from '../assets/images/posts/post (1).jpg'
import image2 from '../assets/images/posts/post (2).jpg'
import image3 from '../assets/images/posts/post (3).jpg'
import image4 from '../assets/images/posts/post (4).jpg'
import image5 from '../assets/images/posts/post (5).jpg'
import image6 from '../assets/images/posts/post (6).jpg'
import image7 from '../assets/images/posts/post (7).jpg'
import image8 from '../assets/images/posts/post (8).jpg'
import image9 from '../assets/images/posts/post (9).jpg'
import image10 from '../assets/images/posts/post (10).jpg'
import image11 from '../assets/images/posts/post (11).jpg'
import image12 from '../assets/images/posts/post (12).jpg'
import image13 from '../assets/images/posts/post (13).jpg'
import image14 from '../assets/images/posts/post (14).jpg'
import image16 from '../assets/images/posts/post (15).jpg'

// avatar
import Avatar1 from '../assets/images/user/user_1.jpg'
import Avatar2 from '../assets/images/user/user_2.jpg'
import Avatar3 from '../assets/images/user/user_3.jpg'
import Avatar4 from '../assets/images/user/user_4.png'

const user1 = {name: 'John Doe', avatar:Avatar1};
const user2 = {name: 'Lorem Ipsum', avatar:Avatar2};
const user3 = {name: 'Alexandra', avatar:Avatar3};
const user4 = {name: 'Kal El', avatar:Avatar4};

const posts = [

    // post item
    {
        id: '1', 

        caption: 'demo single caption', 
        image:[{src: image1}], 

        reactions: [
            {react: 'like', reactions: 1105},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 0,
        shares: 50,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '2', 

        caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 2},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 0,
        shares: 0,

        time: '1m',
        type: 'friends',
        location: '',
        topText: '',
        user: user2
    },
    // end post item

    // post item
    {
        id: '3', 

        caption: 'If you are recording, you are recording. I don\'t believe there is such a thing as a demo or a temporary vocal.', 
        image:[{src: image2}], 

        reactions: [
            {react: 'like', reactions: 200},
            {react: 'angry', reactions: 10},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 10},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 50}
        ], 
        comments: 0,
        shares: 50,

        time: '17 November, 2019',
        type: 'custom',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '4', 

        caption: 'My demo was terrible, I sounded like a chipmunk. I was so young', 
        image:[{src: image3}], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 5,
        shares: 0,

        time: '10m',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item


    // post item
    {
        id: '5', 

        caption: 'The nuclear approach I\'m involved in is called a traveling-wave reactor, which uses waste uranium for fuel. There\'s a lot of things that have to go right for that dream to come true - many decades of building demo plants, proving the economics are right. But if it does, you could have cheaper energy with no CO2 emissions.', 
        image:[{src: image4}], 

        reactions: [
            {react: 'like', reactions: 99},
            {react: 'angry', reactions: 10},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 10},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 202}
        ], 
        comments: 13,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '6', 

        caption: 'You do need money to make a good demo; you do need a bit of financial support.', 
        image:[{src: image5}], 

        reactions: [
            {react: 'like', reactions: 5},
            {react: 'angry', reactions: 1},
            {react: 'love', reactions: 20},
            {react: 'care', reactions: 25},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 99,
        shares: 9,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item


    // post item
    {
        id: '7', 

        caption: 'I think I first realized I wanted to be in country music and be an artist when I was 10. And I started dragging my parents to festivals, and fairs, and karaoke contests, and I did that for about a year before I came to Nashville for the first time. I was 11 and I had this demo CD of me singing Dixie Chicks and Leanne Rimes songs.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 100},
            {react: 'angry', reactions: 10},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 15},
            {react: 'sad', reactions: 100},
            {react: 'haha', reactions: 5},
            {react: 'wow', reactions: 10}
        ], 
        comments: 14,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '8', 

        caption: 'demo single caption', 
        image:[{src: image1}], 

        reactions: [
            {react: 'like', reactions: 155},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 100},
            {react: 'haha', reactions: 11},
            {react: 'wow', reactions: 0}
        ], 
        comments: 14,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item


    // post item
    {
        id: '9', 

        caption: 'demo single caption', 
        image:[{src: image2}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 12},
            {react: 'sad', reactions: 15},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 17}
        ], 
        comments: 18,
        shares: 1,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '10', 

        caption: 'demo single caption', 
        image:[{src: image3}], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 5},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 199,
        shares: 9,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item

    // post item
    {
        id: '11', 

        caption: 'Titanium wasn\'t supposed to be me singing, but they put my demo vocal back on.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 1105},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 17,
        shares: 2,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '12', 

        caption: 'demo single caption', 
        image:[{src: image4}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 5},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 14,
        shares: 12,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item

    // post item
    {
        id: '13', 

        caption: 'When I was in bands, I always liked the demo best.', 
        image:[{src: image5}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 22,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '14', 

        caption: 'When I was in bands, I always liked the demo best.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 110,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item


    // post item
    {
        id: '15', 

        caption: 'Visionary CEOs don\'t need someone else to demo the company\'s key products for them. They deeply understand products, and they have their own coherent and consistent vision of where the industry/business models and customers are today, and where they need to take the', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1},
            {react: 'care', reactions: 5},
            {react: 'sad', reactions: 2},
            {react: 'haha', reactions: 5},
            {react: 'wow', reactions: 11}
        ], 
        comments: 1110,
        shares: 50,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '16', 

        caption: 'When I realized',
        image:[], 

        reactions: [
            {react: 'like', reactions: 100},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 1000},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 0,
        shares: 2,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item

    // post item
    {
        id: '17', 

        caption: 'Every demo I do has a mandolin or resonator on it', 
        image:[{src: image6}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 2}
        ], 
        comments: 10,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '18', 

        caption: 'Every demo I do has a mandolin or resonator on it', 
        image:[{src: image7}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 9},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 0}
        ], 
        comments: 2,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item

    // post item
    {
        id: '19', 

        caption: 'I always loved singing, but I thought it was like drawing', 
        image:[{src: image8}], 

        reactions: [
            {react: 'like', reactions: 15},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 2},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 100,
        shares: 50,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '20', 

        caption: 'I always loved singing, but I thought it was like drawing', 
        image:[{src: image9}], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 0,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item


    // post item
    {
        id: '21', 

        caption: 'demo single caption', 
        image:[{src: image10}], 

        reactions: [
            {react: 'like', reactions: 1105},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 0,
        shares: 50,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '41', 

        caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 2},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 0,
        shares: 0,

        time: '1m',
        type: 'friends',
        location: '',
        topText: '',
        user: user2
    },
    // end post item

    // post item
    {
        id: '23', 

        caption: 'If you are recording, you are recording. I don\'t believe there is such a thing as a demo or a temporary vocal.', 
        image:[{src: image12}], 

        reactions: [
            {react: 'like', reactions: 200},
            {react: 'angry', reactions: 10},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 10},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 50}
        ], 
        comments: 0,
        shares: 50,

        time: '17 November, 2019',
        type: 'custom',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '24', 

        caption: 'My demo was terrible, I sounded like a chipmunk. I was so young', 
        image:[{src: image13}], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 5,
        shares: 0,

        time: '10m',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item


    // post item
    {
        id: '25', 

        caption: 'The nuclear approach I\'m involved in is called a traveling-wave reactor, which uses waste uranium for fuel. There\'s a lot of things that have to go right for that dream to come true - many decades of building demo plants, proving the economics are right. But if it does, you could have cheaper energy with no CO2 emissions.', 
        image:[{src: image14}], 

        reactions: [
            {react: 'like', reactions: 99},
            {react: 'angry', reactions: 10},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 10},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 202}
        ], 
        comments: 13,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '26', 

        caption: 'You do need money to make a good demo; you do need a bit of financial support.', 
        image:[{src: image11}], 

        reactions: [
            {react: 'like', reactions: 5},
            {react: 'angry', reactions: 1},
            {react: 'love', reactions: 20},
            {react: 'care', reactions: 25},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 99,
        shares: 9,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item


    // post item
    {
        id: '27', 

        caption: 'I think I first realized I wanted to be in country music and be an artist when I was 10. And I started dragging my parents to festivals, and fairs, and karaoke contests, and I did that for about a year before I came to Nashville for the first time. I was 11 and I had this demo CD of me singing Dixie Chicks and Leanne Rimes songs.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 100},
            {react: 'angry', reactions: 10},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 15},
            {react: 'sad', reactions: 100},
            {react: 'haha', reactions: 5},
            {react: 'wow', reactions: 10}
        ], 
        comments: 14,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '28', 

        caption: 'demo single caption', 
        image:[{src: image1}], 

        reactions: [
            {react: 'like', reactions: 155},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 100},
            {react: 'haha', reactions: 11},
            {react: 'wow', reactions: 0}
        ], 
        comments: 14,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item


    // post item
    {
        id: '29', 

        caption: 'demo single caption', 
        image:[{src: image16}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 12},
            {react: 'sad', reactions: 15},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 17}
        ], 
        comments: 18,
        shares: 1,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '30', 

        caption: 'demo single caption', 
        image:[{src: image13}], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 5},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 199,
        shares: 9,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item

    // post item
    {
        id: '31', 

        caption: 'Titanium wasn\'t supposed to be me singing, but they put my demo vocal back on.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 1105},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 17,
        shares: 2,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '32', 

        caption: 'demo single caption', 
        image:[{src: image11}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 5},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 14,
        shares: 12,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item

    // post item
    {
        id: '33', 

        caption: 'When I was in bands, I always liked the demo best.', 
        image:[{src: image5}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1000},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 22,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '34', 

        caption: 'When I was in bands, I always liked the demo best.', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 10},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 202}
        ], 
        comments: 110,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item


    // post item
    {
        id: '35', 

        caption: 'Visionary CEOs don\'t need someone else to demo the company\'s key products for them. They deeply understand products, and they have their own coherent and consistent vision of where the industry/business models and customers are today, and where they need to take the', 
        image:[], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 100},
            {react: 'love', reactions: 1},
            {react: 'care', reactions: 5},
            {react: 'sad', reactions: 2},
            {react: 'haha', reactions: 5},
            {react: 'wow', reactions: 11}
        ], 
        comments: 1110,
        shares: 50,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '36', 

        caption: 'When I realized',
        image:[], 

        reactions: [
            {react: 'like', reactions: 100},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 10},
            {react: 'care', reactions: 500},
            {react: 'sad', reactions: 1000},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 0,
        shares: 2,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item

    // post item
    {
        id: '37', 

        caption: 'Every demo I do has a mandolin or resonator on it', 
        image:[{src: image6}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 2}
        ], 
        comments: 10,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user1
    },
    // end post item

    // post item
    {
        id: '38', 

        caption: 'Every demo I do has a mandolin or resonator on it', 
        image:[{src: image7}], 

        reactions: [
            {react: 'like', reactions: 0},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 9},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 10},
            {react: 'wow', reactions: 0}
        ], 
        comments: 2,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user2
    },
    // end post item

    // post item
    {
        id: '39', 

        caption: 'I always loved singing, but I thought it was like drawing', 
        image:[{src: image8}], 

        reactions: [
            {react: 'like', reactions: 15},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 2},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 100,
        shares: 50,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user3
    },
    // end post item
    
    // post item
    {
        id: '40', 

        caption: 'I always loved singing, but I thought it was like drawing', 
        image:[{src: image9}], 

        reactions: [
            {react: 'like', reactions: 10},
            {react: 'angry', reactions: 0},
            {react: 'love', reactions: 0},
            {react: 'care', reactions: 0},
            {react: 'sad', reactions: 0},
            {react: 'haha', reactions: 0},
            {react: 'wow', reactions: 0}
        ], 
        comments: 0,
        shares: 0,

        time: '1h',
        type: 'public',
        location: '',
        topText: '',
        user: user4
    },
    // end post item


]



export default posts