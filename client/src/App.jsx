import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component.jsx';


const HatsPage = (props) => {
  console.log(props)
  return (
  <div>
    <h1>hasts page</h1>
  </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
