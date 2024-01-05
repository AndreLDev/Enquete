// firebase.ts
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDQ_NLjWgSTxeaUBsSZFuKmiy6vB4M-qyo",
    authDomain: "enquetes-f0832.firebaseapp.com",
    databaseURL: "https://enquetes-f0832-default-rtdb.firebaseio.com",
    projectId: "enquetes-f0832",
    storageBucket: "enquetes-f0832.appspot.com",
    messagingSenderId: "296275126099",
    appId: "1:296275126099:web:8fc06983a77d3076b523a6",
    measurementId: "G-47S4PS6TNT"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
