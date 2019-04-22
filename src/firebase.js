import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyBRYmCcD02sqpm_36EEkLFNSbtjncACICY',
  authDomain: 'chat-app-75665.firebaseapp.com',
  databaseURL: 'https://chat-app-75665.firebaseio.com',
  projectId: 'chat-app-75665',
  storageBucket: 'chat-app-75665.appspot.com',
  messagingSenderId: '1089563275603'
};


firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
