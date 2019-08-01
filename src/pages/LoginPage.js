import React from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import "../index.css";
import "../css3/styles.css";
import FormPage from '../components/loginForm';

class loginPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    

 handleChange = e =>{
    // const nextForm= this.state.form;
    // nextForm[e.target.name]= e.target.value;

 this.setState({
     users: {
         ...this.state.form,
         [e.target.name]: e.target.value,
     }
 });
    console.log('nada nada ...');
}

handleClick = (e) =>{

  let self = this;
    fetch('/users', {
        method: 'POST',
        
        body: JSON.stringify("john")
        
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
       }
       return response.json();
    }).then(function(data) {
       
        self.setState({users: data});
        

    })
    // .then( this.props.history.push('/mto')

    // )
    .catch(err => {
   console.log('caught it!',err);
   })
    
}

    render(){
        return(
            <React.Fragment>
                  
                    <MDBContainer>                    
                    <MDBRow center style={{ height: "100vh" }}>
                    <MDBCol middle="true" sm="8" className="text-center">

                       <FormPage onClick={this.handleClick} onChange={this.handleChange}  />
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}
export default loginPage;