import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component.jsx';
import ShopPage from './pages/shopPage/shop.component.jsx';
import Header from './components/Header/Header.component.jsx';
import Registration from './pages/RegistrationPage/Registration.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
