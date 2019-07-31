import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import "../index.css";
import "../css3/styles.css";
import FormPage from '../components/loginForm';

class loginPage extends React.Component{
handleClick = (e) =>{
 
    this.props.history.push('/mto');
}

    render(){
        return(
            <React.Fragment>
                         <MDBBtn onClick={this.handleClick} color="indigo" type="button">Login</MDBBtn>
        

                    <MDBContainer>                    
                    <MDBRow center style={{ height: "100vh" }}>
                    <MDBCol middle="true" sm="8" className="text-center">

                       <FormPage />
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </React.Fragment>
        )
    }
}
export default loginPage;