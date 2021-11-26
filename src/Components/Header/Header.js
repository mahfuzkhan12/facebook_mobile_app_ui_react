import React from "react";
import Aux from "../../_Aux/_Aux";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

import C from './Header.module.css'; // stylesheet


import { useLocation } from "react-router-dom"; // import use location


function Header (props) {

    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    var classN = '';
    var topheader = null
    classN = splitLocation[1] === "" ? C.HasTop : '' 
    topheader = splitLocation[1] === "" ? <TopHeader /> : null

    return(
        <Aux>

            <div className={C.HeaderWrapper + " " + classN}>
                {topheader}
                <Navbar />
            </div>

        </Aux>
    );

}


export default Header