import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Manto from './pages/PageMaintenance';
import LoginPage from './pages/LoginPage';
import Construyendo from './pages/Construyendo';

class App extends Component {
  render() {
    return (      
        <BrowserRouter>
        
              <Switch>
                <Route exact path = "/" component = {LoginPage} />
                
                <Route exact path = "/mto" component = {Manto} /> 
                <Route exact path = "/const" component = {Construyendo} /> 
                <Layout>  
                  <Route exact path = "/inicio" component = {Home} /> 
                  
                </Layout>
                <Route exact component = {NotFound} />
              </Switch>
            
        </BrowserRouter>
   );
  }
}

export default App;
