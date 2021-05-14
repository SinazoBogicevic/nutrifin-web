import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Switch>
      <Layout>
      <Route exact path="/" component={Home}/>
    </Layout>
      </Switch>
    </Router>
  );
}

export default App;
