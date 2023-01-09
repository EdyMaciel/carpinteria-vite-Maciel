
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC6_bll9I7CJdD_BotTIKglaYMCjXupNWk",
  authDomain: "proyectocarpinteria-ad2fc.firebaseapp.com",
  projectId: "proyectocarpinteria-ad2fc",
  storageBucket: "proyectocarpinteria-ad2fc.appspot.com",
  messagingSenderId: "823143130368",
  appId: "1:823143130368:web:2d07e312394120bfadffe5",
  measurementId: "G-2H5CJEKBE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirestore = () =>app