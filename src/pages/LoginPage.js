import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import "../index.css";
import "../css3/styles.css";
import FormPage from '../components/loginForm';

class loginPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.handleClick = this.handleClick.bind(this)
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
        console.log({
            name: e.target.name,
            value: e.target.value,
        })
    }

        handleClick = (e) =>{
            var data = {
                name: "john"
            }
        let self = this;
            fetch('/SingIn', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
                
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