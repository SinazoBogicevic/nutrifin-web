import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from './components/layout/Layout';
import Results from './pages/Results';
import {ModalContext} from "./ModalContext";
import { QueryContext } from './QueryContext';


function App() {
  const [query, setQuery] = useState('')
  const [id, setId] = useState(-1);
  
  const  nutrients = {
    name: '',
    amount: -1,
    unit: '',
}

const productNutri = {
    caloricBreakdown: [''],
    calories: -1,
    carbs: '',
    fat: '',
    nutrients: [nutrients]
}
  const info = {
    title:'',
    importantBadges: [''],
    nutrition: productNutri,
    description: '',
    ingredientList: '',
    images: ['']
  }
  const [mNutrition, setmNutrition] = useState(info)
  const [open, setOpen] = useState(false)
  return (
    <Router>
      <Switch>
        <ModalContext.Provider value={{id, open,mNutrition, setId, setOpen, setmNutrition}}>
        <QueryContext.Provider value={{query, setQuery}}>
      <Layout>
      <Route exact path="/" component={Home}/>
      <Route path="/search" component={Results}/>
    </Layout>
    </QueryContext.Provider>
    </ModalContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
