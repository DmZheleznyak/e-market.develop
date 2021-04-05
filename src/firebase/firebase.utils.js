import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOeJDaUJZMzE15YvocnH4gNf7c1Xc4V2U",
    authDomain: "e-shop-5f859.firebaseapp.com",
    projectId: "e-shop-5f859",
    storageBucket: "e-shop-5f859.appspot.com",
    messagingSenderId: "789299244647",
    appId: "1:789299244647:web:f0dd276aacbb8f8640eec2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;