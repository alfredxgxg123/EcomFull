import 'babel-polyfill';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './config';

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if null ( meaning not sign in return null )
  if (!userAuth) return;
  // otherwise, look for the database to see if it was stored
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // if not then store in to the database and return the userRef
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
