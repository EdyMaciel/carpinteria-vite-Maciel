import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0taEuORwEJkid7C8yYER4GaIsPmW-Bk4",
  authDomain: "proyectocarpinteriarespaldo2.firebaseapp.com",
  projectId: "proyectocarpinteriarespaldo2",
  storageBucket: "proyectocarpinteriarespaldo2.appspot.com",
  messagingSenderId: "833625903548",
  appId: "1:833625903548:web:86a2104dfd46e685de1bb9"
};


const app = initializeApp(firebaseConfig);


export const initFirestore = () =>app