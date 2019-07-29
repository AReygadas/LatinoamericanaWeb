import React from 'react';
import Nav from './Nav';

function Layout(props){

    return (
        <React.Fragment>
            <Nav />
            {props.children}
                  
        </React.Fragment>
        );
}

export default Layout;