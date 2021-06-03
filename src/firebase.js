import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDbDeGOKHt-7AQUa_ll6Nza9nre6B1TmfE',
  authDomain: 'slack-clone-cf092.firebaseapp.com',
  projectId: 'slack-clone-cf092',
  storageBucket: 'slack-clone-cf092.appspot.com',
  messagingSenderId: '150359728240',
  appId: '1:150359728240:web:9d8364936c061ba58794b5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };