import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// deploy firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACZIs8WBEe7nG4Yvr4WU3tgp0qdJq43YI",
  authDomain: "detta-shops.firebaseapp.com",
  projectId: "detta-shops",
  storageBucket: "detta-shops.appspot.com",
  messagingSenderId: "445370690637",
  appId: "1:445370690637:web:38ec0e8fbd4357f6540004",
  measurementId: "G-E9396T1LPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(
  document.getElementById("detta__dev-shopping")
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
