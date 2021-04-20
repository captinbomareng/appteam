import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer.js';
 
function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
        <Footer/>
    </Router>
  )
}

export default App;
