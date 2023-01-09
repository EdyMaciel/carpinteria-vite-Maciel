import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC6_bll9I7CJdD_BotTIKglaYMCjXupNWk",
  authDomain: "proyectocarpinteria-ad2fc.firebaseapp.com",
  projectId: "proyectocarpinteria-ad2fc",
  storageBucket: "proyectocarpinteria-ad2fc.appspot.com",
  messagingSenderId: "823143130368",
  appId: "1:823143130368:web:2d07e312394120bfadffe5",
  measurementId: "G-2H5CJEKBE4"
};


const app = initializeApp(firebaseConfig);


export const initFirestore = () => app