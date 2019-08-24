import React from 'react';
import { MDBBtn, MDBContainer, MDBRow,MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import {Link} from 'react-router-dom';
import logo from '../img/561.png';
import explogo from '../img/expedientes.png';
import invlogo from '../img/inventarios.jpg';
import invrepo from '../img/reportes.jpg';
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
                <br/><br/>
                <MDBRow center>
                    <MDBCol md="4">
                    <MDBCard style={{ width: "14rem" }}>
                        <MDBCardImage className="img-fluid" src={explogo} waves />
                        <MDBCardBody>
                        <MDBCardTitle>EXPEDIENTES</MDBCardTitle>
                        <MDBCardText>
                            Aqui puedes darle seguimiento a los servicios, 
                            Captura, Consulta o Modifica informacion de sericios otorgados, pagos etc. 
                        </MDBCardText>
                        <Link to='/const'><MDBBtn gradient="blue">Ver Expedientes</MDBBtn></Link>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>

                    <MDBCol md="4">
                    <MDBCard style={{ width: "14rem" }}>
                        <MDBCardImage className="img-fluid" src={invlogo} waves />
                        <MDBCardBody>
                        <MDBCardTitle>INVENTARIOS</MDBCardTitle>
                        <MDBCardText>
                            Dale seguimiento a las entradas y salidas de producto com:
                            Ataudes, Consumibles de cafeteria, laboratorio y activo fijo...
                        </MDBCardText>
                        <Link to='/const'><MDBBtn gradient="peach" >Admin. Inventarios</MDBBtn></Link>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>

                    <MDBCol md="4">
                    <MDBCard style={{ width: "14rem" }}>
                        <MDBCardImage className="img-fluid" src={invrepo} waves />
                        <MDBCardBody>
                        <MDBCardTitle>REPORTES</MDBCardTitle>
                        <MDBCardText>
                            Genera los reportes de control y seguimiento tales como:
                            Reportes de servicios, recibos, invemtarios entre otros.
                        </MDBCardText>
                        <Link to='/const'><MDBBtn gradient="purple">Generar Reportes.</MDBBtn></Link>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    </MDBRow>
                    <br/>
                    <MDBRow center>
                    <MDBCol middle="true" sm="8" className="text-center">
                        <img src={logo} alt="logo" style={{ width: "20rem" }} />
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>                                   
            </React.Fragment>
        )
    }
}
export default Home;