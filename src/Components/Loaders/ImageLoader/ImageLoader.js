import React from 'react';

import C from './ImageLoader.module.css';

const Spinner = () => (
    <div className={C.Lds}>
        <div></div>
        <div></div>
        <div></div> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Spinner;