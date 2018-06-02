import firebase from 'firebase/app';
import 'firebase/auth';

const devConfig = {
  apiKey: "AIzaSyDtrHqot8CFRIJbvPwJTfwbKkEBpW8bIBg",
  authDomain: "turco-pneus.firebaseapp.com",
  databaseURL: "https://turco-pneus.firebaseio.com",
  projectId: "turco-pneus",
  storageBucket: "turco-pneus.appspot.com",
  messagingSenderId: "585585918425"
};

const prodConfig = {
  apiKey: "AIzaSyDtrHqot8CFRIJbvPwJTfwbKkEBpW8bIBg",
  authDomain: "turco-pneus.firebaseapp.com",
  databaseURL: "https://turco-pneus.firebaseio.com",
  projectId: "turco-pneus",
  storageBucket: "turco-pneus.appspot.com",
  messagingSenderId: "585585918425"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;
  
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};