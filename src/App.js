import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Manto from './pages/PageMaintenance';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (      
        <BrowserRouter>
        
              <Switch>
                <Route exact path = "/" component = {Home} /> 
                <Route exact path = "/mto" component = {Manto} /> 
                
                <Layout>  
                <Route exact path = "/login" component = {LoginPage} />
                  
                </Layout>
                <Route exact component = {NotFound} />
              </Switch>
            
        </BrowserRouter>
   );
  }
}

export default App;
