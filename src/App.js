import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import VGHomePage from './pages/vghome/vghome.component';
import TCGHomePage from './pages/tcghome/tcghome.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
//Account page needs to be built

import { Switch, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/vghome' component={ VGHomePage } />
        <Route path='/tcghome' component={ TCGHomePage } /> 
        <Route path='/about' component={ AboutPage } />
      </Switch>
    </div>
  );
}

export default App;
