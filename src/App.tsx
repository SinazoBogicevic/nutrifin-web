import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from './components/Layout';
import Results from './pages/Results';
import Table from "./components/table/Table";
import {ModalContext} from "./ModalContext";
import { QueryContext } from './QueryContext';


function App() {
  const [query, setQuery] = useState('')
  const [id, setId] = useState(-1);
  const info = {
    title:'',
    importantBadges: [''],
    nutritionInfo: [''],
    description: '',
    ingredientList: '',
    images: ['']
  }
  const [nutrition, setNutrition] = useState(info)
  const [open, setOpen] = useState(false)
  return (
    <Router>
      <Switch>
        <ModalContext.Provider value={{id, open,nutrition, setId, setOpen, setNutrition}}>
        <QueryContext.Provider value={{query, setQuery}}>
      <Layout>
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Results}/>
      <Route path="/table" component={Table} />
    </Layout>
    </QueryContext.Provider>
    </ModalContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
