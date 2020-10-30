import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyByqYQVNoLw7JPq0djnnJj_cnJnQ30JrMs",
    authDomain: "crwn-db-af199.firebaseapp.com",
    databaseURL: "https://crwn-db-af199.firebaseio.com",
    projectId: "crwn-db-af199",
    storageBucket: "crwn-db-af199.appspot.com",
    messagingSenderId: "229259223976",
    appId: "1:229259223976:web:ae0a0fdc482b3a2277b39d"
  }; 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
    

