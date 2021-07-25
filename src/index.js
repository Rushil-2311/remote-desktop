import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import reportWebVitals from './reportWebVitals';
var firebaseConfig = {
  apiKey: "AIzaSyCn5QBwdj0FNE6TmLK0I4wTvTJb6EsXek4",
  authDomain: "simple-connection-866f6.firebaseapp.com",
  projectId: "simple-connection-866f6",
  storageBucket: "simple-connection-866f6.appspot.com",
  messagingSenderId: "675902078185",
  appId: "1:675902078185:web:4f9af99625eae37ffec478",
  measurementId: "G-9EJ6P3K370"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
