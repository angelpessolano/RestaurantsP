import firebase from 'firebase/app'
import 'firebase/firestore'
 
 
 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB1-zf9ZsKBdgqvIUslTaAI20w74hE-yoQ",
    authDomain: "restaurants-9d3b2.firebaseapp.com",
    projectId: "restaurants-9d3b2",
    storageBucket: "restaurants-9d3b2.appspot.com",
    messagingSenderId: "733291842478",
    appId: "1:733291842478:web:b219a3c04a19c30cfb963f"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
