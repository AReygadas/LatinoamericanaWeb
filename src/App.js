import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Manto from './pages/PageMaintenance';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path = "/" component = {Home} /> 
            <Route exact path = "/mto" component = {Manto} /> 
            <Route component = {NotFound} />  
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
