import React from "react";
import { Link } from "react-router-dom"; // link from react router dom

import C from './Header.module.css'; // stylesheet
import { IconButton } from '@material-ui/core'; // import iconButton form material ui

// import icons

// home icons
import { ReactComponent as Home } from '../../assets/icons/NavBar/home.svg'
import { ReactComponent as HomeActive } from '../../assets/icons/NavBar/home_active.svg'

import { ReactComponent as Community } from '../../assets/icons/NavBar/community.svg'
import { ReactComponent as CommunityActive } from '../../assets/icons/NavBar/community_active.svg'

import { ReactComponent as Watch } from '../../assets/icons/NavBar/watch.svg'
import { ReactComponent as WatchActive } from '../../assets/icons/NavBar/watch_active.svg'

import { ReactComponent as Notification } from '../../assets/icons/NavBar/notification.svg'
import { ReactComponent as Menu } from '../../assets/icons/NavBar/menu.svg'

import { useLocation } from "react-router-dom"; // import use location

function Navbar(props) {


    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    
    return(
        <div className={C.Navbar}>
            
            {/* icons list */}
            <div className={C.IconDiv}>
                <Link className={splitLocation[1] === "" ? C.Active : ""} to="/">
                    <IconButton>
                        {splitLocation[1] === "" ? <HomeActive /> : <Home />}
                    </IconButton>
                </Link>
            </div>

            <div className={C.IconDiv}>
                <Link to="/groups" className={splitLocation[1] === "groups" ? C.Active : ""} >
                    <IconButton>
                        {splitLocation[1] === "groups" ? <CommunityActive /> : <Community />}
                    </IconButton>
                </Link>
            </div>

            <div className={C.IconDiv}>
                <Link to="/watch" className={splitLocation[1] === "watch" ? C.Active : ""}>
                    <IconButton>
                        {splitLocation[1] === "watch" ? <WatchActive /> : <Watch />}
                    </IconButton>
                </Link>
            </div>

            <div className={C.IconDiv}>
                <Link to="/notification" className={splitLocation[1] === "notification" ? C.Active : ""}>
                    <IconButton>
                        {splitLocation[1] === "notification" ? <Notification /> : <Notification />}
                    </IconButton>
                </Link>
            </div>

            <div className={C.IconDiv}>
                <Link to="/menu" className={splitLocation[1] === "menu" ? C.Active : ""}>
                    <IconButton>
                        {splitLocation[1] === "menu" ? <Menu /> : <Menu />}
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default Navbar