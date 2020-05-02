import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component.jsx';
import ShopPage from './pages/shopPage/shop.component.jsx';
import Header from './components/Header/Header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
