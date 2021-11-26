import React from "react";

import C from './Header.module.css'; // stylesheet
import TopLogo from '../../assets/images/Logo/top_logo.png'; /// import logo

import { Icon, IconButton } from '@material-ui/core'; // import iconButton form material ui

//import icons
import MessengerIcon from '../../assets/icons/messenger.svg'
import SearchIcon from '../../assets/icons/search.png'


function TopHeader(props) {

    return(
        <div className={C.TopWrapper}>

            {/* logo */}
            <div className={C.TopLogo}>
                <img src={TopLogo} alt="Facebook" />
            </div>
            {/* logo */}


            {/* right icons */}
            <div className={C.RightIcons}>
                <div>
                    <IconButton>
                        <Icon>
                            <img src={SearchIcon} alt="Seach" />
                        </Icon>
                    </IconButton>
                    <IconButton>
                        <Icon>
                            <img src={MessengerIcon} alt="Messenger" />
                        </Icon>
                    </IconButton>
                </div>
            </div>
            {/* right icons */}

        </div>
    );
}

export default TopHeader