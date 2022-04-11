import React from 'react';
import './MainContainer.css';

const MainContainer = (props) => (
    
    <main className='o-main-container' >
        {props.children}
    </main>
);

export default MainContainer;    

