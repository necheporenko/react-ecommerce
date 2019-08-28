import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC2lnAS4Pc2qxb33oRyXseszBw1CFV_TYQ",
  authDomain: "necheporenko-react-shop.firebaseapp.com",
  databaseURL: "https://necheporenko-react-shop.firebaseio.com",
  projectId: "necheporenko-react-shop",
  storageBucket: "necheporenko-react-shop.appspot.com",
  messagingSenderId: "673917718525",
  appId: "1:673917718525:web:349ba487d1b10cb7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;