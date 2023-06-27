import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
  apiKey: "AIzaSyDuLZAUPYmwBxPDssIwdnD3uDlEnKF7GSM",
  authDomain: "iug-tatwoua.firebaseapp.com",
  databaseURL: "https://iug-tatwoua-default-rtdb.firebaseio.com",
  projectId: "iug-tatwoua",
  storageBucket: "iug-tatwoua.appspot.com",
  messagingSenderId: "1002837082846",
  appId: "1:1002837082846:web:58e0e46935515aab7cf84f",
  measurementId: "G-4WDPYE2MQ9"
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
