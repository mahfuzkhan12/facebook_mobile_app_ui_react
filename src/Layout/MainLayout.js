import React from 'react';
import Aux from '../_Aux/_Aux';

import Device from '../Components/MainWrapper/Device';
import Content from './Content';
import Header from '../Components/Header/Header';


import { useLocation } from "react-router-dom"; // import use location


function MainLayout(props) {

    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    var classN = '';
    classN = splitLocation[1] === "" ? "hasTop" : '' 

  
    return (

      <Aux>
          <Device>
              
            <Header /> 


            
            <div className={"main_wrapper " + classN}>
                <Content />
            </div>

          </Device>
      </Aux>


    )
}

export default MainLayout;