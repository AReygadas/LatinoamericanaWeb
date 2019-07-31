import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import {Link} from 'react-router-dom';
import logo from '../img/561.png';
import "../index.css";
import "../css3/styles.css";
import FormPage from '../components/loginForm';

class Home extends React.Component{
handleClick = (e) =>{
 
    this.props.history.push('/mto');
}

    render(){
        return(
            <React.Fragment>
                                                    
            </React.Fragment>
        )
    }
}
export default Home;