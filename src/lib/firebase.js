import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


import "firebase/auth";

const config = {
  apiKey: "AIzaSyAZPm0LjwpFsd7Bn8b1t4RLr1du4qaArCI",

  authDomain: "instagram-clone-ba665.firebaseapp.com",

  projectId: "instagram-clone-ba665",

  storageBucket: "instagram-clone-ba665.appspot.com",

  messagingSenderId: "50994931828",

  appId: "1:50994931828:web:2e99c0f86e7ba0b4e78921",
};

const firebase = initializeApp(config);
const  FieldValue  = getDatabase();

console.log('a',firebase)
console.log("b",FieldValue)





export { firebase, FieldValue };
