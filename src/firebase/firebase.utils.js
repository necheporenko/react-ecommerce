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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;