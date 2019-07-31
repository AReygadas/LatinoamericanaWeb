import React from "react";
import {Link, withRouter} from 'react-router-dom';
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

  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        errors: {},
      
        users: []
    }
}

componentDidMount() {
    let self = this;
    fetch('/users', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({users: data});
        
    }).catch(err => {
    console.log('caught it!',err);
    })
    
}
   handleChange = e=>{
     console.log({
      name: e.target.name, 
      value: e.target.value})
  }
  handleClick (e){
    
    this.props.history.push(`/mto`);

    }

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
                    onChange={this.handleChange}
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
                   onChange={this.handleChange}
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
                    onClick={this.handleClick}
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


    <div className="container"> 
      <div className="panel panel-default p50 uth-panel">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Member name</th>
              <th>Member email</th>
              <th>Blood Group</th>
              <th>Action</th>
            </tr>
          </thead>
           <tbody>
              {this.state.users.map(usuarios =>
                <tr key={usuarios.id}>
                <td>{usuarios.username} </td>
                <td>{usuarios.password}</td>
                 <td>{usuarios.fullname}</td>
                 <td><a>Edit</a>|<a>Delete</a></td>
                  </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>


    </React.Fragment>
  );
};
};

export default FormPage;