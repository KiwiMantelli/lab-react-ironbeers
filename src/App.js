import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import OneBeer from './pages/OneBeer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/new-beer" component={NewBeer}/>
        <Route exact path="/beers/:id" component={OneBeer}/>
        <Route exact path="/:id" component={RandomBeer}/>
      </Switch>
    </div>
  );
}

export default App;
