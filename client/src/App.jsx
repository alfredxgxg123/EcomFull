import 'babel-polyfill';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component.jsx';
import ShopPage from './pages/shopPage/shop.component.jsx';
import Header from './components/Header/Header.component.jsx';
import Registration from './pages/RegistrationPage/Registration.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase';

const App = () => {

  const [ user, setUser ] = useState({
    currentUser: null
  })
  const { currentUser } = user;
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // check if sign in or not by userAuth is null or has a user
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // if there is a userAuth, will fire to firebase to see if there is a doc
        const userRef = await createUserProfileDocument(userAuth);
        // constantly listening for the changes
        userRef.onSnapshot(snapShot => {
          setUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        // set it to null
        setUser({
          currentUser: userAuth
        })
      }
    })
    return () => { 
      unsubscribeFromAuth() };
  }, [])
  console.log(user);
  
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
