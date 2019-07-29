import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import {Link} from 'react-router-dom';
import logo from '../img/561.png';
import "../index.css";
import "../css3/styles.css"

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
              
                    <MDBContainer>                    
                    <MDBRow center style={{ height: "100vh" }}>
                    <MDBCol middle="true" sm="8" className="text-center">
                        <img src={logo} alt="logo" style={{ width: "20rem" }} />
                        <br></br>
                       
                       <Link to = "/login"><MDBBtn gradient="blue"><h21>Ingresa</h21></MDBBtn></Link>
                    
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </React.Fragment>
        )
    }
}
export default Home;