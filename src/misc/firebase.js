import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCw6rL3vnP1k6_ONuOGsJDSqskkS9BiYhk",
    authDomain: "web-app-a7cd0.firebaseapp.com",
    projectId: "web-app-a7cd0",
    storageBucket: "web-app-a7cd0.appspot.com",
    messagingSenderId: "1052029777354",
    appId: "1:1052029777354:web:852b8bd65c8fe476d28b33",
    measurementId: "G-8V8RBF5QCX"
  };

  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
