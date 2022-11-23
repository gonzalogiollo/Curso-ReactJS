import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';



const firebaseConfig = {

  apiKey: "AIzaSyBTL7jz-y2vxa1sFVKY53eVd2GTSoRKEJ0",

  authDomain: "curso-react-tiendaropa.firebaseapp.com",

  projectId: "curso-react-tiendaropa",

  storageBucket: "curso-react-tiendaropa.appspot.com",

  messagingSenderId: "320646714275",

  appId: "1:320646714275:web:cfdc5b2bae0fe32a6e4016"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'products');
export const catCollection = collection(db, 'categorias');
