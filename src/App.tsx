import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from './components/Layout';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Switch>
      <Layout>
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Results}/>
    </Layout>
      </Switch>
    </Router>
  );
}

export default App;
