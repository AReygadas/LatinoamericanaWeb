import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import {Link} from 'react-router-dom';
import logo from '../img/561.png';
import "../index.css";
import "../css3/styles.css";

class Home extends React.Component{
handleClick = (e) =>{
 
    this.props.history.push('/mto');
}

    render(){
        return(
            <React.Fragment>
                    <MDBContainer>
                    <MDBRow center style={{ height: "100vh" }}>
                    <MDBCol middle="true" sm="8" className="text-center">
                        <img src={logo} alt="logo" style={{ width: "20rem" }} />
                        <h1>Welcome to Latinoamericana App</h1>
                        <Link to='/login'>
                        <MDBBtn  color="light-blue"><strong>Inicia!</strong></MDBBtn></Link>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>                                   
            </React.Fragment>
        )
    }
}
export default Home;