import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from 'mdbreact';

class FormPage extends React.Component {




  render (){
  

      return(
    <React.Fragment>    
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    onChange={this.props.onChange}
                    name="usuario"
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                   onChange={this.props.onChange}
                   name="contraseña"
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
               
                  <MDBBtn
                    onClick={this.props.onClick}
                    color="light-blue"
                    className="mb-3"
                    type="button"
                  >
                    Login
                  </MDBBtn>

              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

   </React.Fragment>
  );
};
};

export default FormPage;