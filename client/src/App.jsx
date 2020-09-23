import 'babel-polyfill';
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homePage/homePage.component.jsx';
import ShopPage from './pages/shopPage/shop.component.jsx';
import CheckoutPage from './pages/checkoutPage/checkout.component.jsx';


import Header from './components/Header/Header.component.jsx';
import Registration from './pages/RegistrationPage/Registration.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from '../src/redux/user/user.selector';

const App = ({ setCurrentUser, currentUser }) => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // check if sign in or not by userAuth is null or has a user
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // if there is a userAuth, will fire to firebase to see if there is a doc
        const userRef = await createUserProfileDocument(userAuth);
        // constantly listening for the changes
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
        });
      } else {
        // set it to null
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        
        <Route path='/signin' render={() => currentUser ? <Redirect to = '/' /> : <Registration /> } />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
