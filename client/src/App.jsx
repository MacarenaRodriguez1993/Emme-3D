
import React from 'react';
import { Route } from "react-router-dom";
import Home from './pages/home'
import './App.css'

const App = ()=> {

  return (
    <div className="App">
      <Route path='/' component={Home} />
    </div>
  )
  
}

export default App
