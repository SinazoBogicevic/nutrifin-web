import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from './components/Layout';
import Results from './pages/Results';
import Modal from "./components/modal/Modal";
import {ModalContext} from "./ModalContext";
import { QueryContext } from './QueryContext';


function App() {
  const [query, setQuery] = useState('')
  const [id, setId] = useState(-1);
  const [open, setOpen] = useState(false)
  return (
    <Router>
      <Switch>
        <ModalContext.Provider value={{id, open, setId, setOpen}}>
        <QueryContext.Provider value={{query, setQuery}}>
      <Layout>
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Results}/>
      <Route path="/modal" component={Modal} />
    </Layout>
    </QueryContext.Provider>
    </ModalContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
