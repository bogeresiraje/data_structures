import React from 'react';
import TopBar from '../res/flash-css/templates/topBar/TopBar';


const Template = ({ children }) => {
    return (
        <div>
            <TopBar />
            { children }
        </div>
    );
};


export default Template;
